import Link from 'next/link';
import styles from './Goods.module.css'

import Price from './Price'

export default ({good}) => (
    <Link href="/good/[id]" as={`/good/${good.id}`}>
      <a className={styles.link}>
        <div className={styles.image}>
          <img className={styles.image} src={good.image} alt="image" />
        </div>
        <div className={styles.description}>
          <h3>
            {good.title}
          </h3>
          <Price price={good.price} />
        </div>
      </a>
    </Link>
);
