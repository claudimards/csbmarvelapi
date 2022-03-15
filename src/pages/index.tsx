import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mavel Heroes</title>
        <meta name="description" content="Marvel Hereos web app developed by Claudimar Bezerra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <h1>Hello World!</h1>
      </main>

      <Footer />
    </>
  )
}

export default Home
