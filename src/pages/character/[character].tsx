import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useQuery } from "react-query"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { HeroBanner } from "../../components/HeroBanner"
import { HeroBio } from "../../components/HeroBio"
import { HeroGallery } from "../../components/HeroGallery"
import { Footer } from "../../components/Footer"

type CharType = {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  };
  events?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  };
  series?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  };
  stories?: {
    title: string;
    available: number;
    items: [{
      name: string;
    }]
  }
}

type EventType = {
  id: number;
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

const Hero: NextPage = () => {
  const router = useRouter()
  const { character } = router.query

  const fetchCharacter = async () => {
    const charResponse = await api.get(`v1/public/characters/${character}`)
    const { data: charData } = charResponse.data

    const eventsResponse = await api.get(`v1/public/characters/${character}/events`)
    const { data: eventsData } = eventsResponse.data

    const char = charData.results.map((result: CharType) => {
      return {
        id: result.id,
        name: result.name,
        description: result.description,
        thumbnail: {
          path: result.thumbnail.path,
          extension: result.thumbnail.extension
        },
        comics: {
          title: "Comics",
          ...result.comics
        },
        events: {
          title: "Events",
          ...result.events
        },
        series: {
          title: "Series",
          ...result.series
        },
        stories: {
          title: "Stories",
          ...result.series
        }
      }
    })

    const events = eventsData.results.map((event: EventType) => {
      return {
        id: event.id,
        title: event.title,
        thumbnail: {
          extension: event.thumbnail.extension,
          path: event.thumbnail.path
        }
      }
    })

    return {
      char: char[0],
      events: events
    }
  }

  const { isLoading, isError, data } = useQuery(['character', character], fetchCharacter)

  return (
    <>
      <Head>
        <title>Hero | {isLoading ? 'Loading' : data?.char.name}</title>
      </Head>

      <Header />

      <main className="main">
        {isLoading ? (
          <section className="container loading">
            <h3>Loading Character...</h3>
          </section>

        ) : isError ? (
          <section className="container error">
            <h3>Failed to load Character! :(</h3>
          </section>

        ) : (
          <>
            <HeroBanner
              thumbnail={data?.char.thumbnail}
              name={data?.char.name}
              description={data?.char.description}
            />

            <HeroBio
              comics={data?.char.comics}
              events={data?.char.events}
              series={data?.char.series}
              stories={data?.char.stories}
            />

            {!!data?.events.length && (
              <HeroGallery events={data?.events} />
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Hero