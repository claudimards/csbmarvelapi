import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoArrowUndoOutline } from "react-icons/io5";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const offline = () => {
  return (
    <>
      <Head>
        <title>Marvel | Offline</title>
      </Head>

      <Header />

      <main className="main pt1">
        <section className="container offline">
          <section className="warning">
            <h3>Oh! It seems you are offline right now</h3>
            <h4>Try again in a few seconds, or <Link href="/"><a><IoArrowUndoOutline /> go back to Home</a></Link></h4>
          </section>
          <Image
            src="/assets/offlineimage.jpg"
            width={480}
            height={270}
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default offline