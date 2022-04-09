import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'
import { CharContextProvider } from '../contexts/CharContext'

import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CharContextProvider>
        <Component {...pageProps} />
      </CharContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
