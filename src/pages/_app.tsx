import { globalStyles } from '@/styles/globals'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
      )
}
