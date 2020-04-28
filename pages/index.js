import Good from '../components/Good';
import Header from '../components/Header'
import { firestore } from '../lib/firebase'

function Index({goods}) {
  return (
    <>
      <Header />
      <div className="wrapper">
        {goods.map(good => (
          <Good good={good} key={good.id} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let arr = [];
  await firestore.collection('goods').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      arr.push(doc.data())
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  return {
    props: {
      goods: arr
    }
  }
}


export default Index
