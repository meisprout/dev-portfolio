import './globals.css'
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
      <body>{children}</body>
    </html>
  )
}
