import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mavel Heroes</title>
        <meta name="description" content="Marvel Hereos web app developed by Claudimar Bezerra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.footer}>
        Header
      </header>

      <main className={styles.main}>
        <h1>Hello World!</h1>
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </>
  )
}

export default Home
