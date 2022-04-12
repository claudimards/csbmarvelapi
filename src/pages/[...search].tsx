import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { IoArrowUndoOutline } from "react-icons/io5"
import { useQuery } from "react-query"

import { BottomToolbar } from "../components/BottomToolbar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroesList } from "../components/HeroesList"
import { TopToolbar } from "../components/TopToolbar"

import { api } from "../services/api"

const SearchResults: NextPage = () => {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const router = useRouter()
  const { asPath } = router
  let query = asPath.split('=')[1]
  let queryToFetch = query

  if (query?.includes('%20')) {
    query = query.replaceAll('%20', ' ')
    queryToFetch = queryToFetch.split('%20')[0]
  }

  const fetchSearch = async () => {
    try {
      const searchResponse = await api.get('/v1/public/characters', {
        params: {
          nameStartsWith: queryToFetch,
          limit: 18,
          offset: offset
        }
      })
      const { data } = searchResponse.data

      return data
      
    } catch (error) {
      alert(`Something went wrong!\nError.: ${error}`)  
    }
  }

  const { isLoading, isError, data } = useQuery([`${query}`, page], fetchSearch)

  const [orderBy, setOrderBy] = useState('nameAsc')

  const handleOrderBy = (orderType: string) => {
    setOrderBy(orderType)
  }

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
        ) : !data.results.length ? (
          <>
            <TopToolbar
              title={`Search results for.: ${query}`}
              activeOrderBy={!!data.results.length}
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
              activeOrderBy={data.results.length > 1}
            />

            <HeroesList
              charListData={data.results}
            />

            {data.offset < data.total && (
              <BottomToolbar
                total={data.total}
                count={data.count}
                offset={data.offset}
                limit={data.limit}
                handleOffset={setOffset}
                page={page}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default SearchResults