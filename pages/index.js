import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ROCK YOUR DRUM!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <img src="/jannedrum.png" />
      </main>
    </div>
  )
}
