import Head from "next/head"

import NavBar from "../components/navbar"
import { Headline, Subtitle, SectionTitle } from "../components/typography"

export async function getStaticProps() {
  // Fetch Jered O Show RSS Feed
  const Parser = require("rss-parser");
  const parser = new Parser();
  const podcast = await parser.parseURL("https://feeds.transistor.fm/jered-o-show");

  return {
    props: { podcast },
  }
}

export default function Podcast({ podcast }) {
  return (
    <div className="min-w-sm antialiased">

      <Head>
        <title>Podcast - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />

      <main className="px-4 max-w-screen-lg mx-auto">

        <Headline>Podcast</Headline>

        <section className="flex space-x-4 items-start sm:items-center pb-6">
          <div className="flex-shrink-0">
            <a href={podcast.feedUrl} title={podcast.title}>
              <img className="w-28 h-28 rounded shadow-2xl" src={podcast.image.url} title={podcast.image.title} />
            </a>
          </div>

          <figure className="w-screen">
            <div className="block sm:flex justify-start md:justify-between items-center w-full">
              <h2 className="text-xl mb-2 sm:mb-0 md:text-2xl font-extrabold block sm:inline-block text-gray-900">{podcast.title}</h2>
              <a href="https://open.spotify.com/show/3S8KYEw9WWBVXiXu4ebA6M"><span className="sm:ml-3 sm:mb-0 mb-2 text-xs bg-indigo-600 hover:bg-indigo-500 text-white uppercase font-bold px-4 py-2 tracking-wider shadow-lg rounded inline-block">Subscribe</span></a>
            </div>
            <p className="text-xs md:text-sm max-w-xl text-gray-500 mt-2 sm:mt-3 inline-block">{podcast.description}</p>
          </figure>

        </section>

        <SectionTitle>Recent episodes</SectionTitle>

        <EpisodeList feed={podcast} />

      </main>
    </div>
  )
}

function EpisodeList({ feed, children }) {
  return (
    <section className="space-y-4 pt-2 pb-6">
      {feed.items.map((episode, index) => (
        <div className="flex items-center justify-start w-auto h-28 space-x-4 rounded shadow-md p-4 border border-gray-200 bg-white" key={index}>
          <div className="flex-shrink-0">
            <a href={episode.link}>
              <img src={episode.itunes.image} alt={episode.title} className="h-20 w-20 rounded" />
            </a>
          </div>
          <div className="overflow-ellipsis overflow-hidden">
            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wide text-gray-900">
              <a href={episode.link}>{episode.title}</a>
            </h4>
            <div className ="text-sm text-gray-500 max-h-10">
              {episode.content}
            </div>
          </div>
          <div className="text-gray-700 text-sm font-medium hover:text-indigo-600 flex-shrink-0">
            <a href={episode.link}>
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
