// Build time function
export async function getServerSideProps() {
  // const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.transistor.fm%2Fjered-o-show");
  // const episodes = await res.json();

  //const res = await fetch("https://feeds.transistor.fm/jered-o-show");
  // const xml = await res.text();
  const Parser = require("rss-parser");
  const parser = new Parser();
  const podcast = await parser.parseURL("https://feeds.transistor.fm/jered-o-show");

  return {
    props: { podcast },
  };
}

export default function Podcast({ podcast }) {
  return (
    <>
      <h1>Podcast episodes</h1>
      {console.log(podcast)}
      <a href={podcast.feedUrl}>{podcast.title}</a>
      <ul>
        {podcast.items.map((episode, index) => (
          <li key={index}>
            <img src={episode.itunes.image} width="100px" height="100px" />
            <h2><a href={episode.link}>{episode.title}</a></h2>{episode.content}&nbsp;
            <a href={episode.link}>Listen here.</a>
          </li>
        ))}
      </ul>
    </>
  );
}
