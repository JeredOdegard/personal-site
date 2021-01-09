import Head from "next/head"
import Container from "components/container"
import Navigation from "components/navigation"
import { Headline, Subtitle, SectionTitle } from "components/typography"

export async function getStaticProps() {
  const Parser = require("rss-parser")
  const parser = new Parser()
  const podcast = await parser.parseURL("https://feeds.transistor.fm/jered-o-show")

  if (!podcast) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { podcast },
    revalidate: 600,
  }
}


function Podcast({ podcast }) {
  return (
    <Container>
    
      <Head>
        <title>Home - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.png"  type="image/icon type" />
      </Head>

      <Navigation />

      {/* Page Wrapper */}
      <div className="px-6 lg:px-16 xl:px-6 pt-6 pb-4 max-w-screen-xl mx-auto">

        <Headline>Podcast</Headline>

        {/* Podcast Card */}
        <div className="w-full mt-10 bg-white bg-opacity-25 mb-8 rounded-md shadow-light pb-10 md:pb-0">
          <div className="block md:flex space-x-10 pb-8 md:pb-0">
            <img className="w-full md:w-72 md:h-72 rounded-t-md md:rounded-none md:rounded-tl" src={podcast.image.url} alt={podcast.image.title} />
            <div className="pt-12 pr-10">
              <h2 className="text-4xl mb-2">{podcast.title}</h2>
              <p className="text-gray-600 mb-4">{podcast.description}</p>
              <p className="text-gray-400 uppercase tracking-wide font-bold text-xs mb-3">Subscribe on</p>
              <a href="https://podcasts.apple.com/us/podcast/jered-o-show/id1536284770">
                <button className="mr-4 px-5 py-2 font-bold text-purple-600 rounded-full border-2 border-inset border-purple-300 text-sm lg:text-base hover:bg-purple-100 transition">Apple</button>
              </a>
              <a href="https://open.spotify.com/show/3S8KYEw9WWBVXiXu4ebA6M">
                <button className="mr-4 px-4 py-2 font-bold text-green-500 rounded-full border-2 border-green-300 text-sm lg:text-base hover:bg-green-100 transition">Spotify</button>
              </a>
            </div>
          </div>
          <div className="shadow-inner p-10 pb-0">
            <p className="text-gray-400 text-xl font-bold mb-6">Latest episodes</p>

            <EpisodeList feed={podcast} />

          </div>
        </div>
        {/* Podcast Card - End */}

        <div className="text-xs text-gray-400 text-center my-4">&copy; Jered Odegard. All rights reserved.</div>
      </div>
      {/* Page Wrapper - End */}

    </Container>
  );
}

function EpisodeList({ feed, children }) {
  return (
    <section className="space-y-4 pt-2 pb-6">
      {feed.items.map((episode, index) => (
        <div className="flex space-x-8 items-center mb-6 pb-6" key={index}>
          <img className="rounded w-24" src={episode.itunes.image} />
          <div className="">
            <div className="text-lg font-bold">{episode.title}</div>
            <div className="h-12 overflow-ellipsis overflow-hidden">{episode.content}</div>
          </div>
          <div className="">
            <a href={episode.link}>
              <button className="hidden md:flex px-7 py-2 bg-gray-200 font-bold text-gray-600 rounded hover:bg-gray-300 text-sm lg:text-base">Play</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

function toggleNav() {
  let main = document.getElementById("main")
  let mobileNav = document.getElementById("mobileMenu")
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden")
    main.classList.add("fixed")
  }
  else {
    mobileNav.classList.add("hidden")
    main.classList.remove("fixed")
  }
}

export default Podcast;
