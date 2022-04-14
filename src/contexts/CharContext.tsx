import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

type Char = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  isFavorite?: boolean | undefined;
}

type CharContextType = {
  handleFavoriteChar: (char: Char) => void;
  favoritesCharacters: [] | Char[];
  favCount: number;
  orderBy: string;
  setOrderBy: (orderBy: string) => void;
}

type CharContextProviderProps = {
  children: ReactNode;
}

export const CharContext = createContext({} as CharContextType)

export const CharContextProvider = ({ children }: CharContextProviderProps) => {
  const [orderBy, setOrderBy] = useState<string>('nameAsc');
  const [favoritesCharacters, setFavoritesCharacters] = useState<[] | Char[]>([])
  let favCount = favoritesCharacters?.length

  // CHECK IF THERE IS A FAV LIST SAVED AT LOCALSTORAGE
  useEffect(() => {
    const hasSavedChars = localStorage.getItem('favCharList')

    if (!!hasSavedChars) {
      const parsedCharList = JSON.parse(hasSavedChars)

      setFavoritesCharacters(parsedCharList)
    }
  }, [])

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
        const newFavoritesChars = favoritesCharacters?.filter((currentChar: Char) => currentChar.id !== char.id).map((currentChar: Char) => {
          return {
            ...currentChar,
            isFavorite: true
          }
        })

        setFavoritesCharacters(newFavoritesChars)

        /**
         * IF THERE IS CHAR IN FAV LIST, UPDATE LOCALSTORAGE VALUE, OTHERWISE, DELETE IT
         */
        if (!newFavoritesChars.length) {
          localStorage.removeItem('favCharList')
        } else {
          localStorage.setItem('favCharList', JSON.stringify(newFavoritesChars))
        }
        
        toast.success('Character successfuly removed')

        return
      }

      toast.warning('Character was not removed')
      return

    } else {
      // IF CHAR IS NOT IN FAVORITE LIST, ASK TO ADD
      const confirmAnswer = confirm('Add character to Favorites?')

      if (confirmAnswer) {
        const newFavoritesChars = [...favoritesCharacters, {...char, isFavorite: true}]
        
        setFavoritesCharacters(newFavoritesChars)

        // SAVING FAV LIST TO LOCAL STORAGE
        localStorage.setItem('favCharList', JSON.stringify(newFavoritesChars))
        return toast.success('Character successfuly added to Favorites!')
      }

      return toast.warning('Character not added!')
    }
  }

  return (
    <CharContext.Provider
      value={{
        handleFavoriteChar,
        favoritesCharacters,
        favCount,
        orderBy,
        setOrderBy
      }}
    >
      {children}
    </CharContext.Provider>
  )
}