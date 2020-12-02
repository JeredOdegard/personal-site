import Head from "next/head"

import NavBar from "../components/navbar"

export default function Home() {
  return (
    <div className="min-w-sm antialiased">
      <Head>
        <title>Home - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main className="px-4 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-black mb-8 mt-12 leading-tight text-gray-900">Hello.</h1>
      </main>
    </div>
  )
}
