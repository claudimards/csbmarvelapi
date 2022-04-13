import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { BsShieldPlus, BsShieldMinus } from 'react-icons/bs'
import { CharContext } from '../../contexts/CharContext'

import styles from './styles.module.scss'

type CharProps = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  isFavorite?: boolean | undefined;
}

type Char = {
  char: CharProps;  
}

export const HeroCard = ({ char }: Char) => {
  const { handleFavoriteChar } = useContext(CharContext)

  return (
    <div className={styles.heroCard}>
      <button type="button" title="Add to bookmark" onClick={() => handleFavoriteChar(char)}>
        {char.isFavorite ? ( <BsShieldMinus /> ) : ( <BsShieldPlus /> )}
      </button>
      <Link href={`/character/${char.id}`}>
        <a>
          <header className={styles.heroCardHeader}>
            <figure>
              <Image
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                width={195}
                height={210}
                alt={char.name}
                placeholder="blur"
              />
            </figure>

          </header>
          <article className={styles.heroCardContent}>
            <h2 className="heroName">
              {char.name}
            </h2>
          </article>
        </a>
      </Link>
    </div>
  )
}