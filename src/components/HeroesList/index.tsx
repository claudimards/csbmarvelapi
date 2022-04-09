import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HeroCard } from '../HeroCard'
import styles from './styles.module.scss'

type Char = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  isFavorite?: boolean | undefined;
}

type CharListTypes = {
  charListData: Char[];
  orderBy: string;
}

export const HeroesList = ({ charListData, orderBy }: CharListTypes) => {
  const [charList, setCharList] = useState<Char[]>(charListData)
  // EFFECT WHEN ORDER BY CHANGE
  useEffect(() => {
    if ( orderBy === 'nameDesc' ) {
      let newCharListOrder = charList.map((char: Char) => {
        return {
          name: char.name,
          id: char.id,
          thumbnail: char.thumbnail,
          isFavorite: char.isFavorite
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
          thumbnail: char.thumbnail,
          isFavorite: char.isFavorite
        }
      })

      newCharListOrder.sort(function (currentChar: Char, nextChar: Char) {
        return currentChar.name.localeCompare(nextChar.name);
      });
      
      setCharList(newCharListOrder)
    }
  }, [orderBy])

  useEffect(() => {
    setCharList(charListData)
  }, charList)

  return (
    <section className="container">
      <ToastContainer />

      <article className={styles.heroesList}>

        {charList.map((char: Char) => (
          <HeroCard
            key={char.id}
            char={char}
          />
        ))}

      </article>
    </section>
  )
}