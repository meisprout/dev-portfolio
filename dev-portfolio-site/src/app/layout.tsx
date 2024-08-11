import Head from 'next/head'
import './styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eah Maala Web Developer Portfolio',
  description: 'Front-end Developer and Web/UI Designer Portfolio. Made in NextJS Typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Head>
        <title>Eah Maala Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of a web developer from the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>{children}</body>
      
    </html>
  )
}
