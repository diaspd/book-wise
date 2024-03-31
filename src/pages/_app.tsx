import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { ReactElement, ReactNode } from 'react'

import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/globals'

export const nunito = Nunito({ subsets: ['latin'] })

export type NextPageWithLayout<P = string, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}
