import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  // Podcast RSS Feed
  const Parser = require("rss-parser");
  const parser = new Parser();
  const podcast = await parser.parseURL("https://feeds.transistor.fm/jered-o-show");

  return {
    props: { podcast },
  };
}

export default function Podcast({ podcast }) {
  return (
    <div className="min-w-sm">
      {console.dir(podcast)}
      <Head>
        <title>Podcast - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="flex justify-between sm:justify-start sm:space-x-8 items-center shadow mb-4">
        <div className="md:h-20 md:w-16 bg-black flex items-center justify-center">
          <svg className="h-14 w-14" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="logo" transform="translate(19.000000, 17.000000)" fill="#ffffff" fill-rule="nonzero">
                <path d="M3.43,30.196 L6.778,26.56 C7.714,27.28 8.86,27.82 10.216,28.18 C11.572,28.54 12.994,28.72 14.482,28.72 C16.498,28.72 18.37,28.396 20.098,27.748 C21.826,27.1 23.326,26.182 24.598,24.994 C25.87,23.806 26.866,22.372 27.586,20.692 C28.306,19.012 28.666,17.152 28.666,15.112 C28.666,11.632 27.61,8.728 25.498,6.4 L25.498,6.4 L28.702,2.944 L25.318,0.028 L22.078,3.7 C20.998,3.076 19.828,2.602 18.568,2.278 C17.308,1.954 15.958,1.792 14.518,1.792 C12.502,1.792 10.624,2.104 8.884,2.728 C7.144,3.352 5.644,4.24 4.384,5.392 C3.124,6.544 2.134,7.942 1.414,9.586 C0.694,11.23 0.334,13.072 0.334,15.112 C0.334,16.816 0.592,18.394 1.108,19.846 C1.624,21.298 2.374,22.588 3.358,23.716 L3.358,23.716 L0.046,27.316 L3.43,30.196 Z M9.298,17.452 C9.082,16.924 8.974,16.18 8.974,15.22 C8.974,14.428 9.088,13.672 9.316,12.952 C9.544,12.232 9.886,11.596 10.342,11.044 C10.798,10.492 11.374,10.048 12.07,9.712 C12.766,9.376 13.57,9.208 14.482,9.208 C15.298,9.208 15.982,9.316 16.534,9.532 L16.534,9.532 L9.298,17.452 Z M14.41,21.124 C14.026,21.124 13.648,21.1 13.276,21.052 C12.904,21.004 12.586,20.92 12.322,20.8 L12.322,20.8 L19.558,12.88 C19.798,13.48 19.918,14.236 19.918,15.148 C19.918,15.94 19.804,16.696 19.576,17.416 C19.348,18.136 19.006,18.772 18.55,19.324 C18.094,19.876 17.518,20.314 16.822,20.638 C16.126,20.962 15.322,21.124 14.41,21.124 Z" id="Ø"></path>
              </g>
            </g>
          </svg>
        </div>

        <nav className="hidden sm:flex justify-between space-x-6 text-sm text-gray-500 font-medium">
          <Link href="/"><a className="hover:text-indigo-600 px-2">Home</a></Link>
          <Link href="/coaching"><a className="hover:text-indigo-600 px-2">Coaching</a></Link>
          <Link href="/podcast"><a className="text-gray-900 font-extrabold border-b-4 border-indigo-600 -mb-2 px-2">Podcast</a></Link>
          <Link href="/blog"><a className="hover:text-indigo-600 px-2">Blog</a></Link>
          <Link href="/about"><a className="hover:text-indigo-600 px-2">About</a></Link>
        </nav>

        <button className="h-7 w-7 mr-3 sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <main className="mx-4">
        <section className="flex space-x-4">
          <a className="inline-block flex-shrink-0" href={podcast.feedUrl} title={podcast.title}>
            <img className="w-28 h-28 rounded" src={podcast.image.url} title={podcast.image.title} />
          </a>
          <div>
            <h1 className="text-xl mb-1 md:text-3xl md:mb-2 font-extrabold">{podcast.title}</h1>
            <p className="text-xs md:text-sm w-4/5 text-gray-500">{podcast.description}</p>
          </div>
        </section>

        <section className="space-y-4 pt-6 pb-6">
          {podcast.items.map((episode, index) => (
            <div className="flex items-center justify-start w-auto h-28 space-x-4 rounded shadow-md p-4 border border-gray-200 bg-white max-w-xl" key={index}>
              <div className="flex-shrink-0">
                <a href={episode.link}>
                  <img src={episode.itunes.image} alt={episode.title} className="h-20 w-20 rounded" />
                </a>
              </div>
              <div className="overflow-ellipsis overflow-hidden">
                <div className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <a href={episode.link}>{episode.title}</a>
                </div>
                <div className ="text-sm text-gray-500 max-h-10">
                  {episode.content}
                </div>
              </div>
              <div className="text-gray-700 text-sm font-medium hover:text-indigo-600 flex-shrink-0">
                <a href={episode.link}>
                  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
