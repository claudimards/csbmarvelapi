import { NextPage } from "next"
import Head from "next/head"
import { useContext } from "react"

import { CharContext } from "../contexts/CharContext"
import { Header } from "../components/Header"
import { TopToolbar } from "../components/TopToolbar"
import { HeroesList } from "../components/HeroesList"
import { Footer } from "../components/Footer"

const Favorites: NextPage = () => {
  const { favoritesCharacters } = useContext(CharContext)

  return (
    <>
      <Head>
        <title>Maverl | Favorites</title>
      </Head>

      <Header />

      <main className="p1">
        {favoritesCharacters?.length ? (
          <>
            <TopToolbar
              title="Favorites"
              activeOrderBy={favoritesCharacters.length > 1}
            />

            <HeroesList
              charListData={favoritesCharacters}
            />
          </>
        ) : (
          <section className="container error">
            <h3>Empty favorite list.</h3>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Favorites