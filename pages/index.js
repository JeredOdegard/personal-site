import Head from "next/head"

import NavBar from "@/components/navbar.js"
import { Headline, Subtitle, SectionTitle } from "@/components/typography.js"

export default function Home() {
  return (
    <div className="min-w-sm antialiased">
      <Head>
        <title>Home - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main className="px-4 max-w-screen-lg mx-auto">
        <Headline>Hello.</Headline>

        <Subtitle>Hahaha</Subtitle>

        <SectionTitle>This is the section title.</SectionTitle>
      </main>

      <section className="grid grid-cols-12 gap-y-2 gap-x-4 max-w-screen-lg mx-auto px-4">
        <div className="bg-red-300 text-white text-center px-2">1</div>
        <div className="bg-red-300 text-white text-center px-2">2</div>
        <div className="bg-red-300 text-white text-center px-2">3</div>
        <div className="bg-red-300 text-white text-center px-2">4</div>
        <div className="bg-red-300 text-white text-center px-2">5</div>
        <div className="bg-red-300 text-white text-center px-2">6</div>
        <div className="bg-red-300 text-white text-center px-2">7</div>
        <div className="bg-red-300 text-white text-center px-2">8</div>
        <div className="bg-red-300 text-white text-center px-2">9</div>
        <div className="bg-red-300 text-white text-center px-2">10</div>
        <div className="bg-red-300 text-white text-center px-2">11</div>
        <div className="bg-red-300 text-white text-center px-2">12</div>

        <div className="bg-red-300 text-white px-2">One</div>
        <div className="bg-red-300 text-white px-2 col-span-2">Two</div>
        <div className="bg-red-300 text-white px-2 col-span-3">Three</div>
        <div className="bg-red-300 text-white px-2 col-span-4">Four</div>
        <div className="bg-red-300 text-white px-2 col-span-2">Two</div>
        <div className="bg-blue-300 text-white px-2 col-span-8">outside</div>
        <div className="bg-green-300 text-white px-2 col-span-4 text-right">after</div>
        
        <div className="bg-gray-700 text-white p-4 col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 flex items-center gap-x-4 rounded shadow-lg">
          <div className="h-10 w-10 bg-black flex-shrink-0 rounded-full"></div>
          <div>
            <div className="text-sm font-extrabold -mt-1">Jered Odegard</div>
            <div className="text-sm">Founder of Odegard Research</div>
          </div>
        </div>
        <div className="hidden bg-green-300 sm:grid sm:col-span-6 md:grid md:col-span-7 lg:grid lg:col-span-8"></div>

        <div className="bg-white p-4 col-span-8 flex items-center justify-end gap-x-4 rounded shadow-lg border border-gray-100">
          <div className="h-10 w-10 bg-gray-300 flex-shrink-0 rounded-full"></div>
          <div>
            <div className="text-sm font-extrabold -mt-1">John Doe</div>
            <div className="text-sm">Chief Product Officer @ Twitter</div>
          </div>
        </div>
        <div className="bg-red-300 text-white px-2 col-span-3">1,2,3</div>
        <div className="bg-red-300 text-white px-2">4</div>
      </section>
    </div>
  )
}
