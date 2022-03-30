import Image from 'next/image'
import Link from 'next/link'
import { RiShieldCrossLine } from 'react-icons/ri'

import styles from './styles.module.scss'

type HeroProps = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

type HeroType = {
  hero: HeroProps;
}

export const HeroCard = ({ hero }: HeroType) => {
  return (
    <div className={styles.heroCard}>
      <button type="button" title="Add to bookmark">
        <RiShieldCrossLine />
      </button>
      <Link href={`/character/${hero.id}`}>
        <a>
          <header className={styles.heroCardHeader}>
            <figure>
              <Image
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                width="195"
                height="210"
                alt={hero.name}
              />
            </figure>

          </header>
          <article className={styles.heroCardContent}>
            <h2 className="heroName">
              {hero.name}
            </h2>
          </article>
        </a>
      </Link>
    </div>
  )
}