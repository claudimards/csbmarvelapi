import Image from 'next/image'
import Link from 'next/link'
import { RiShieldCrossLine } from 'react-icons/ri'

import styles from './styles.module.scss'

export const HeroCard = () => {
  return (
    <Link href="/hero/drstrange">
      <a className={styles.heroCard}>
        <header className={styles.heroCardHeader}>
          <figure>
            <Image
              src="/assets/images/drstrange.jpg"
              width="195"
              height="210"
              alt="Doctor Strange"
            />
          </figure>

          <button type="button" title="Add to bookmark">
            <RiShieldCrossLine />
          </button>
        </header>
        <article className={styles.heroCardContent}>
          <h2 className="heroName">
            Doctor Strange
          </h2>
          <h4 className="heroRealName">
            Stephen Strange
          </h4>
        </article>
      </a>
    </Link>
  )
}