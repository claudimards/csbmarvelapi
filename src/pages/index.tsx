import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RiShieldCrossLine } from 'react-icons/ri'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mavel Heroes</title>
      </Head>

      <Header />

      <main className="main p1">
        <section className="container">
          <h1 className="pageTitle">The world's strongest heroes!</h1>

          <article className={styles.heroesList}>
            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>

                <button type="button" title="Add to bookmark">
                  <RiShieldCrossLine />
                </button>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>

            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>

            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>

            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>

            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>

            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>


            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>


            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>


            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>


            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>


            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>


            <div className={styles.heroCard}>
              <header className={styles.heroCardHeader}>
                <figure>
                  <Image
                    src="/assets/images/drstrange.jpg"
                    width="195"
                    height="210"
                    alt="Doctor Strange"
                  />
                </figure>
              </header>
              <article className={styles.heroCardContent}>
                <h2 className="heroName">
                  Doctor Strange
                </h2>
                <h4 className="heroRealName">
                  Stephen Strange
                </h4>
              </article>
            </div>
          </article>
        </section>

        <section className="container">
          <article className={styles.bottomToolbar}>
            <div className="pagination">
              1 2 ... 6
            </div>

            <div className="counter">
              Exibindo 1 - 12 de 120
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
