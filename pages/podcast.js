import Head from "next/head"

export async function getStaticProps() {
  // Fetch Jered O Show RSS Feed
  const Parser = require("rss-parser");
  const parser = new Parser();
  const podcast = await parser.parseURL("https://feeds.transistor.fm/jered-o-show");

  return {
    props: { podcast },
  }
}


function Podcast({ podcast }) {
  return (
    <div id="main" className="antialiased">
    
      <Head>
        <title>Home - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.png"  type="image/icon type" />
      </Head>

      {/* Mobile Nav */}
      <div id="mobileMenu" className="hidden w-full h-full fixed z-50 bg-white p-6 overflow-y-auto">
        <div className="w-full flex justify-between mb-6">
          <div className="h-20 w-16 bg-gray-900 flex items-center justify-center fill-current text-white relative -top-6 rounded-b-md">
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
            </svg>
          </div>
          <button className="h-9 w-9 fill-current text-gray-800 " onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-4 lg:space-y-10 text-4xl lg:text-6xl text-gray-800 font-serif">
          <a className="block border-b border-gray-200 p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/">Home</a>
          <a className="block border-b border-gray-200 p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/coaching">Coaching</a>
          <a className="block border-b border-gray-200 p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/podcast">Podcast</a>
          <a className="block border-b border-gray-200 p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/about">About</a>
          <a className="block p-4 rounded-md hover:bg-gray-100 hover:text-gray-800" href="/about">Contact</a>
        </nav>
      </div>
      {/* Mobile Nav - End */}

      {/* Page Wrapper */}
      <div className="px-6 lg:px-24 pt-6 pb-4 z-10 relative max-w-screen-3xl mx-auto">

        {/* Navbar */}
        <div className="flex justify-between">

          {/* Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="h-20 w-16 bg-gray-900 flex items-center justify-center fill-current text-white absolute top-0 rounded-b-md">
              <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
              </svg>
            </div>
            {/* Logo - End */}

            {/* Nav Items */}
            <nav className="hidden md:flex space-x-8 ml-24 text-sm lg:text-base">
              <a className="font-medium text-gray-500 hover:text-gray-800" href="/">Home</a>
              <a className="font-medium text-gray-500 hover:text-gray-800" href="/coaching">Coaching</a>
              <a className="font-extrabold text-gray-800" href="/podcast">Podcast</a>
              <a className="font-medium text-gray-500 hover:text-gray-800" href="/about">About</a>
            </nav>
            {/* Nav Items - End */}

          </div>
          {/* Left Side - End */}

          {/* Contact */}
          <a href="/contact">
            <button className="hidden md:flex px-4 py-2 bg-yellow-200 font-bold text-yellow-600 rounded hover:bg-yellow-300 text-sm lg:text-base">Contact</button>
          </a>
          {/* Contact - End */}

          {/* Hamburger */}
          <button className="h-9 w-9 md:hidden fill-current text-gray-900" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Hamburger - End */}
        </div>
        {/* Navbar - End */}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 font-serif leading-tight mt-20">Podcast</h1>

        {/* Podcast Card */}
        <div className="w-full mt-10 bg-white bg-opacity-25 mb-8 rounded-md shadow-light pb-10 md:pb-0">
          <div className="block md:flex space-x-10 pb-8 md:pb-0">
            <img className="w-full md:w-72 md:h-72 rounded-t-md md:rounded-none md:rounded-tl" src={podcast.image.url} alt={podcast.image.title} />
            <div className="pt-12 pr-10">
              <h2 className="text-4xl mb-2 font-extrabold">{podcast.title}</h2>
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
          <div className="shadow-inner p-10">
            <p className="text-gray-400 text-xl font-bold mb-6">Recent episodes</p>

            <div className="flex space-x-8 items-center mb-6 pb-6 border-b border-gray-100">
              <img className="rounded w-24" src={podcast.items[0].itunes.image} />
              <div className="">
                <div className="text-lg font-bold">{podcast.items[0].title}</div>
                <div className="h-12 overflow-ellipsis overflow-hidden">{podcast.items[0].content}</div>
              </div>
              <div className="">
                <a href={podcast.items[0].link}>
                  <button className="hidden md:flex px-7 py-2 bg-gray-200 font-bold text-gray-600 rounded hover:bg-gray-300 text-sm lg:text-base">Play</button>
                </a>
              </div>
            </div>

            <div className="flex space-x-8 items-center">
              <img className="rounded w-24" src={podcast.items[1].itunes.image} />
              <div className="">
                <div className="text-lg font-bold">{podcast.items[1].title}</div>
                <div className="h-12 overflow-ellipsis overflow-hidden">{podcast.items[1].content}</div>
              </div>
              <div className="">
                <a href={podcast.items[1].link}>
                  <button className="hidden md:flex px-7 py-2 bg-gray-200 font-bold text-gray-600 rounded hover:bg-gray-300 text-sm lg:text-base">Play</button>
                </a>
              </div>
            </div>

          </div>
        </div>
        {/* Podcast Card - End */}

        <div className="text-xs text-gray-400 text-center my-4">&copy; 2020 Jered Odegard. All rights reserved.</div>
      </div>
      {/* Page Wrapper - End */}

    </div>
  );
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
