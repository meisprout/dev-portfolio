import Head from 'next/head'
import './styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meisprout Web Developer Portfolio',
  description: 'A portfolio for a web designer and developer using NextJS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Head>
        <title>Meisprout Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of a web developer from the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>{children}</body>
      
    </html>
  )
}
