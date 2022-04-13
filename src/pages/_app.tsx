import type { AppProps } from 'next/app'
import Head from 'next/head'

import { QueryClient, QueryClientProvider } from 'react-query'
import { CharContextProvider } from '../contexts/CharContext'

import '../styles/globals.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CharContextProvider>
        <Head>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        </Head>
        <Component {...pageProps} />
      </CharContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
