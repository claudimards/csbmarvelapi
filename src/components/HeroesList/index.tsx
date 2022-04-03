import { useEffect } from 'react';
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
  charList: Char[];
  handleCharList: (list: Char[]) => void;
  favoritesCharacters: Char[] | [];
  handleFavoritesCharaters: (list: Char[]) => void;
  orderBy: string;
}

export const HeroesList = ({ charList, handleCharList, orderBy, favoritesCharacters, handleFavoritesCharaters }: CharListTypes) => {
  // FUNCTION TO HANDLE FAVORITE CHARS
  const handleFavoriteChar = (char: Char) => {
    // CHECK IF CHAR ALREADY IS IN FAVORITES
    const alreadyFavorite = favoritesCharacters?.some((fav: Char) => {
      return fav.id === char.id
    })

    // IF CHAR IS IN FAVORITE LIST
    if ( alreadyFavorite ) {
      // ASK IF WANT TO REMOVE CHAR FROM FAVORITE LIST
      const confirmAnswer = confirm('Remove character from Favorites?')

      if ( confirmAnswer ) {
        const newFavoritesChars = favoritesCharacters?.filter(currentChar => currentChar.id !== char.id).map(currentChar => {
          return {
            name: currentChar.name,
            id: currentChar.id,
            thumbnail: currentChar.thumbnail,
            isFavorite: false
          }
        })

        handleFavoritesCharaters(newFavoritesChars)
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

        handleCharList(newCharListState)
        return
      }

      toast.warning('Character was not removed')
      return

    } else {
      // IF CHAR IS NOT IN FAVORITE LIST, ASK TO ADD
      const confirmAnswer = confirm('Add character to Favorites?')

      if (confirmAnswer) {
        handleFavoritesCharaters(
          [
            ...favoritesCharacters,
            {
              ...char,
              isFavorite: true
            }
          ]
        )

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

        handleCharList(newCharListState)

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
      
      handleCharList(newCharListOrder)
      
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
      
      handleCharList(newCharListOrder)
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