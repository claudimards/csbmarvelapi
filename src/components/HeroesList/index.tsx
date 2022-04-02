import { useEffect, useState } from 'react';
import { HeroCard } from '../HeroCard'
import styles from './styles.module.scss'

type Char = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

type CharListTypes = {
  heroes: Char[];
  orderBy: string;
}

export const HeroesList = ({ heroes, orderBy }: CharListTypes) => {
  const [charList, setCharList] = useState(heroes)

  useEffect(() => {
    if ( orderBy === 'nameDesc' ) {
      let newCharListOrder = charList.map((char: Char) => {
        return {
          name: char.name,
          id: char.id,
          thumbnail: char.thumbnail
        }
      })

      
      newCharListOrder.sort(function (currentChar: Char, nextChar: Char) {
        return nextChar.name.localeCompare(currentChar.name);
      });
      
      setCharList(newCharListOrder)
      
    } else {
      let newCharListOrder = charList.map((char: Char) => {
        return {
          name: char.name,
          id: char.id,
          thumbnail: char.thumbnail
        }
      })

      
      newCharListOrder.sort(function (currentChar: Char, nextChar: Char) {
        return currentChar.name.localeCompare(nextChar.name);
      });
      
      setCharList(newCharListOrder)
    }
  }, [orderBy])

  return (
    <section className="container">
      <article className={styles.heroesList}>

        {charList.map(hero => (
          <HeroCard
            key={hero.id}
            hero={hero}
          />
        ))}

      </article>
    </section>
  )
}