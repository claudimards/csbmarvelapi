import { createContext, ReactNode, useState } from "react";
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
  favoritesCharacters: Char[] | [];
}

type CharContextProviderProps = {
  children: ReactNode;
}

export const CharContext = createContext({} as CharContextType)

export const CharContextProvider = ({ children }: CharContextProviderProps) => {
  const [favoritesCharacters, setFavoritesCharacters] = useState<Char[] | []>([])

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
            name: currentChar.name,
            id: currentChar.id,
            thumbnail: currentChar.thumbnail,
            isFavorite: false
          }
        })

        setFavoritesCharacters(newFavoritesChars)
        toast.success('Character successfuly removed')

        return
      }

      toast.warning('Character was not removed')
      return

    } else {
      // IF CHAR IS NOT IN FAVORITE LIST, ASK TO ADD
      const confirmAnswer = confirm('Add character to Favorites?')

      if (confirmAnswer) {
        setFavoritesCharacters(
          [
            ...favoritesCharacters,
            {
              ...char,
              isFavorite: true
            }
          ]
        )

        toast.success('Character successfuly added to Favorites!')

        return
      }

      return toast.warning('Character not added!')
    }
  }

  return (
    <CharContext.Provider
      value={{
        handleFavoriteChar,
        favoritesCharacters
      }}
    >
      {children}
    </CharContext.Provider>
  )
}