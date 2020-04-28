import Header from '../../components/Header';
import {firestore} from '../../lib/firebase';
import Price from '../../components/Price';

function Good({good}) {
  return (
    <>
      <Header />
      <div className="wrapper good">
        <div className="imageContainer">
          <img src={good.image} height="350px" width="100%" alt="image" />
        </div>
        <div className="content">
          <h1>{good.title}</h1>
          <div className="price">
            <Price price={good.price} />
          </div>
          <p className="paragraph">
            <b>Stock:</b> 
            {good.stock > 1 ? 'Yes' : 'No'}
          </p>
          <p className="paragraph">
            <b>Rating:</b>
            {good.rating}/5
          </p>
          <p>
            <b>Description:</b>
            <br />
            {good.description}
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  let arr = [];
  await firestore
    .collection('goods')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let data = doc.data();
        arr.push({params: {id: data.id}});
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  return {
    paths: arr,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  let good;
  await firestore
    .collection('goods')
    .where('id', '==', params.id)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      snapshot.forEach((doc) => {
        good = doc.data();
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

  return {
    props: {
      good,
    },
  };
}

export default Good;
