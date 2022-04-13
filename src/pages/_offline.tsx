import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const offline = () => {
  return (
    <>
      <Head>
        <title>Marvel | Offline</title>
      </Head>

      <Header />

      <main className="main p1">
        <section className="container error">
          <h3>Oh! It seems you are offline right now</h3>
          <h4>Try again in a few seconds.</h4>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default offline