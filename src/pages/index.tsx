import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import type { NextPage } from 'next'

import { api } from '../services/api'
import { Header } from '../components/Header'
import { TopToolbar } from '../components/TopToolbar'
import { HeroesList } from '../components/HeroesList'
import { BottomToolbar } from '../components/BottomToolbar'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  const router = useRouter()
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const fetchCharacters = async () => {
    try {
      const response = await api.get('v1/public/characters', {
        params: {
          limit: 18,
          offset: offset
        }
      })
      const { data } = response.data

      return data
      
    } catch (error) {
      alert(`Something went wrong!\n${error}`)
      return router.push('/_offline')
    }
  }

  const { isLoading, isError, data } = useQuery(['characters', page], fetchCharacters)

  return (
    <>
      <Head>
        <title>Marvel Chars</title>
      </Head>

      <Header />

      <main className="main p1">
        {isLoading ? (
          <section className="container loading">
            <h3>Loading Heroes...</h3>
          </section>

        ) : isError ? (
          <section className="container error">
            <h3>Failed to load Heroes! :(</h3>
          </section>
          
        ) : (
          <>
            <TopToolbar
              title="The world&apos;s strongest characters!"
              activeOrderBy={data.results.length > 1}
            />
    
            <HeroesList
              charListData={data.results}
            />
    
            <BottomToolbar
              total={data.total}
              count={data.count}
              offset={data.offset}
              limit={data.limit}
              handleOffset={setOffset}
              page={page}
              onPageChange={setPage}
            />
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Home
