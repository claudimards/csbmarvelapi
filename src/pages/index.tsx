import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { api } from '../services/api'

import { Header } from '../components/Header'
import { TopToolbar } from '../components/TopToolbar'
import { HeroesList } from '../components/HeroesList'
import { BottomToolbar } from '../components/BottomToolbar'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  const fetchCharacters = async () => {
    const response = await api.get('v1/public/characters', {
      params: {
        limit: 18
      }
    })
    const { data } = response.data

    return data
  }

  const { isLoading, isError, data, error } = useQuery('characters', fetchCharacters)

  return (
    <>
      <Head>
        <title>Mavel Heroes</title>
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
            <TopToolbar />
    
            <HeroesList heroes={data.results} />
    
            <BottomToolbar />
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Home
