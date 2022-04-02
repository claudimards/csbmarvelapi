import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
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
  heroes: Char[];
  orderBy: string;
}

export const HeroesList = ({ heroes, orderBy }: CharListTypes) => {
  const [charList, setCharList] = useState<Char[]>(heroes)
  const [favoritesCharacters, setFavoritesCharacters] = useState<Char[]>([])

  // FUNCTION TO HANDLE FAVORITE CHARS
  const handleFavoriteChar = (char: Char) => {
    // CHECK IF CHAR ALREADY IS IN FAVORITES
    const alreadyFavorite = favoritesCharacters?.some(fav => {
      return fav.id === char.id
    })

    // IF CHAR IS IN FAVORITE LIST
    if ( alreadyFavorite ) {
      // ASK IF WANT TO REMOVE CHAR FROM FAVORITE LIST
      const confirmAnswer = confirm('Remove character from Favorites?')

      if ( confirmAnswer ) {
        const newFavoritesChars = favoritesCharacters.filter(currentChar => currentChar.id !== char.id).map(currentChar => {
          return {
            name: currentChar.name,
            id: currentChar.id,
            thumbnail: currentChar.thumbnail,
            isFavorite: false
          }
        })

        setFavoritesCharacters(newFavoritesChars)
        toast.success('Character successfuly removed')

        const newCharListState = charList.map((currentChar : Char) => {
          if ( currentChar.id === char.id ) {
            return {
              ...currentChar,
              isFavorite: !currentChar.isFavorite
            }
          }
          return currentChar
        })

        setCharList(newCharListState)
        return
      }

      toast.warning('Character was not removed')
      return

    } else {
      // IF CHAR IS NOT IN FAVORITE LIST, ASK TO ADD
      const confirmAnswer = confirm('Add character to Favorites?')

      if (confirmAnswer) {
        setFavoritesCharacters((prevState) => {
          return [
            ...prevState,
            {
              ...char,
              isFavorite: true
            }
          ]
        })

        toast.success('Character successfuly added to Favorites!')

        // CHANGE CHAR STATE FROM MAIN LIST
        const newCharListState = charList.map((currentChar : Char) => {
          if ( currentChar.id === char.id ) {
            return {
              ...currentChar,
              isFavorite: !currentChar.isFavorite
            }
          }
          return currentChar
        })

        setCharList(newCharListState)

        // REMOVE FAVORITED CHARS FROM MAIN LIST
        /* const newCharlist = charList.filter(currentChar => currentChar.id !== char.id).map(currentChar => {
          return {
              name: currentChar.name,
              id: currentChar.id,
              thumbnail: currentChar.thumbnail,
              isFavorite: currentChar.isFavorite
            }
        })

        setCharList(newCharlist) */
        return
      }

      return toast.warning('Character not added!')
    }
  }

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

  return (
    <section className="container">
      <ToastContainer />

      {!!favoritesCharacters?.length && (
        <>
          <h3>My Favorites</h3>
          <article className={styles.heroesList}>
            {favoritesCharacters.map((char: Char) => (
              <HeroCard
                key={char.id}
                char={char}
                handleFavoriteChar={handleFavoriteChar}
                isFavorite={char?.isFavorite}
              />
            ))}
          </article>
        </>
      )}

      <article className={styles.heroesList}>

        {charList.map((char: Char) => (
          <HeroCard
            key={char.id}
            char={char}
            handleFavoriteChar={handleFavoriteChar}
            isFavorite={char?.isFavorite}
          />
        ))}

      </article>
    </section>
  )
}