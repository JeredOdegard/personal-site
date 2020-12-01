import Head from "next/head";

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
    <div className="p-6">
      {console.dir(podcast)}
      <Head>
        <title>Podcast - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <a href={podcast.feedUrl} title={podcast.title}><img className="w-28 h-28" src={podcast.image.url} title={podcast.image.title} /></a>
      <h1 className="text-3xl font-extrabold">{podcast.title}</h1>
      <p className="text-xs w-80 text-gray-500 pt-2">{podcast.description}</p>
      <div className="space-y-4 pt-6 pb-6">
        {podcast.items.map((episode, index) => (
          <div className="flex items-center w-auto md:w-4/5 md:mx-auto h-28 space-x-4 rounded shadow-md p-4 overflow-hidden border border-gray-200" key={index}>
            <div className="flex-shrink-0">
              <a href={episode.link}>
                <img src={episode.itunes.image} alt={episode.title} className="h-20 w-20 rounded" />
              </a>
            </div>
            <div className="overflow-ellipsis overflow-hidden">
              <div className="font-medium text-base">
                <a href={episode.link}>{episode.title}</a>
              </div>
              <div className ="text-sm text-gray-500 truncate">
                {episode.content}
              </div>
            </div>
            <div className="text-purple-600 text-sm font-medium pr-2 pl-2 hover:text-purple-700">
              <a href={episode.link}>Listen</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
