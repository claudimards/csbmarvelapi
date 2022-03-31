import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { IoArrowUndoOutline } from "react-icons/io5"
import { useQuery } from "react-query"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroesList } from "../components/HeroesList"
import { TopToolbar } from "../components/TopToolbar"
import { api } from "../services/api"

const SearchResults: NextPage = () => {
  const router = useRouter()
  const { asPath } = router
  let query = asPath.split('=')[1]
  let queryToFetch = query

  if (query.includes('%20')) {
    query = query.replaceAll('%20', ' ')
    queryToFetch = queryToFetch.split('%20')[0]
  }

  console.log(query)

  const fetchSearch = async () => {
    try {
      const searchResponse = await api.get('/v1/public/characters', {
        params: {
          nameStartsWith: queryToFetch,
          limit: 18
        }
      })
      const { results } = searchResponse.data.data

      return results
      
    } catch (error) {
      alert(`Something went wrong!\nError.: ${error}`)  
    }
  }

  const { isLoading, isError, data, error } = useQuery(`${query}`, fetchSearch)

  return (
    <>
      <Head>
        <title>Marvel | Search Results</title>
      </Head>

      <Header />

      <main className="main p1">
        {!(!!query) ? (
          <section className="container loading">
            <h3>To search for a specific character, you must type a name...</h3>
          </section>
        ) : isLoading ? (
          <section className="container loading">
            <h3>Loading search results...</h3>
          </section>
        ) : isError ? (
          <section className="container error">
            <h3>Failed to load search results! :(</h3>
          </section>
        ) : !data.length ? (
          <>
            <TopToolbar
              title={`Search results for.: ${query}`}
              activeOrderBy={!!data.length}
            />

            <section className="container not-found">
              <h3>Not found results!</h3>
              <h4>Try again typing another name, or</h4>
              <Link href="/">
                <a>
                  <IoArrowUndoOutline />
                  Go back to Home
                </a>
              </Link>
            </section>
          </>
        ) : (
          <>
            <TopToolbar
              title={`Search results for.: ${query}`}
              activeOrderBy={data.length > 1}
            />

            <HeroesList heroes={data} />
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default SearchResults