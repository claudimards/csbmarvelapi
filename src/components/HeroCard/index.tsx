import Image from 'next/image'
import Link from 'next/link'
import { BsShieldPlus, BsShieldMinus } from 'react-icons/bs'

import styles from './styles.module.scss'

type CharProps = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

type Char = {
  char: CharProps;
  handleFavoriteChar: (char: {
    id: number,
    name: string,
    thumbnail: {
      extension: string;
      path: string;
    }
  }) => void;
  isFavorite?: boolean | undefined;
}

export const HeroCard = ({ char, handleFavoriteChar, isFavorite }: Char) => {
  return (
    <div className={styles.heroCard}>
      <button type="button" title="Add to bookmark" onClick={() => handleFavoriteChar({
        id: char.id,
        name: char.name,
        thumbnail: {
          extension: char.thumbnail.extension,
          path: char.thumbnail.path
        }
      })}>
        {isFavorite ? ( <BsShieldMinus /> ) : ( <BsShieldPlus /> )}
      </button>
      <Link href={`/character/${char.id}`}>
        <a>
          <header className={styles.heroCardHeader}>
            <figure>
              <Image
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                width="195"
                height="210"
                alt={char.name}
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