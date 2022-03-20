import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/Header'
import { TopToolbar } from '../components/TopToolbar'
import { HeroesList } from '../components/HeroesList'
import { BottomToolbar } from '../components/BottomToolbar'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mavel Heroes</title>
      </Head>

      <Header />

      <main className="main p1">
        <TopToolbar />

        <HeroesList />

        <BottomToolbar />
      </main>

      <Footer />
    </>
  )
}

export default Home
