import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CharContext } from '../../contexts/CharContext';

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
}

export const HeroesList = ({ charListData }: CharListTypes) => {
  const { orderBy } = useContext(CharContext)
  const [charList, setCharList] = useState<Char[]>(charListData)

  const handleOrderList = (order: string, list: Char[] | []) => {
    if ( order === 'nameDesc' ) {
      let newCharListOrder = list.map((char: Char) => {
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
      let newCharListOrder = list.map((char: Char) => {
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
  }

  // EFFECT WHEN CHAR LIST CHANGES
  useEffect(() => {
    handleOrderList(orderBy, charListData)
  }, [charListData])
  
  // EFFECT WHEN ORDER BY CHANGE
  useEffect(() => {
    handleOrderList(orderBy, charList)
  }, [orderBy])

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