import styles from './Header.module.css'
import Link from 'next/link'

export default () => (
  <div className={styles.wrapper}>
    <Link href="/">
      <a>
        Sometitle
      </a>
    </Link>
  </div>
)