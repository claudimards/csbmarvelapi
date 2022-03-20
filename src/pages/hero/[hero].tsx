import { NextPage } from "next"
import Head from "next/head"

import { Header } from "../../components/Header"
import { HeroBanner } from "../../components/HeroBanner"
import { HeroSkillsList } from "../../components/HeroSkillsList"
import { HeroBio } from "../../components/HeroBio"
import { HeroGallery } from "../../components/HeroGallery"
import { Footer } from "../../components/Footer"

const Hero: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hero | Doctor Strange</title>
      </Head>

      <Header />

      <main className="main">
        <HeroBanner />

        <HeroSkillsList />

        <HeroBio />

        <HeroGallery />
      </main>

      <Footer />
    </>
  )
}

export default Hero