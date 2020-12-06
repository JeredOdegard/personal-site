import Head from "next/head"

function Blog() {
  return (
    <div className="min-w-sm antialiased">
    
      <Head>
        <title>ALTERNATIVE - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-gray-900 p-24 pt-10 pb-4">

        <div className="flex justify-between">
          <nav className="text-gray-400 flex justify-between gap-x-8 font-medium">
            <a className="text-gray-100 font-extrabold" href="#">Home</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Coaching</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Podcast</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Blog</a>
            <a className="hover:text-gray-200 hover:underline" href="#">About</a>
          </nav>
          <button className="px-4 py-2 bg-gray-700 font-bold text-white rounded -mt-2 hover:bg-gray-600">
          Contact
          </button>
        </div>

        <div className="mt-48 mb-64 text-center">
          <h1 className="text-5xl md:text-7xl text-gray-100 font-bold font-serif leading-tight">I'm obsessed with results.</h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-screen-lg mt-4 mx-auto">
          After a decade in tech building teams and products, I left.
          </p>
          <a href="#">
            <button className="px-8 py-3 bg-purple-700 text-lg font-bold text-white rounded mt-8 hover:bg-purple-600">See my story</button>
          </a>
        </div>

        <div className="w-full py-16 md:py-32 flex items-center mt-10 -mt-20 px-8 bg-white mb-16 rounded-xl">
          <section className="grid grid-cols-12 max-w-screen-xl lg:gap-x-20 mx-auto items-center">
            <div className="col-span-full xl:col-span-8">
              <div className="uppercase tracking-wide text-yellow-600 font-extrabold mb-4">CERTIFIED COACH</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 font-serif">Make your growth easy.</h2>
              <p className="text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500 max-w-screen">I help high performing professionals and executives at companies like <span className="font-bold text-gray-700">Amazon</span>,  <span className="font-bold text-gray-700">Facebook</span>, and <span className="font-bold text-gray-700">Microsoft</span> achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
                <a href="#">
                  <button className="px-8 py-4 bg-yellow-600 text-lg font-bold text-white rounded mt-2 lg:mt-4 shadow-lg hover:bg-yellow-500">What is coaching?</button>
                </a>
            </div>
            <div className="hidden xl:grid col-span-full mt-10 xl:mt-0 xl:col-span-4 mt-0">
              <img className="shadow-dark rounded" src="selft.jpg" />
            </div>
          </section>
        </div>

        <div className="w-full py-16 md:py-32 flex items-center px-8 bg-white mb-10 rounded-xl">
          <section className="grid grid-cols-12 max-w-screen-xl lg:gap-x-20 mx-auto items-center">
            <div className="hidden xl:grid col-span-full mt-10 xl:mt-0 xl:col-span-4 mt-0">
              <img className="shadow-dark rounded" src="podcast.jpg" />
            </div>
            <div className="col-span-full xl:col-span-8">
              <div className="uppercase tracking-wide text-purple-600 font-extrabold mb-4">PODCAST HOST</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 font-serif">What rebels do.</h2>
              <p className="text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500 max-w-screen">I host a podcast called the <span className="font-bold text-gray-700">Jered O Show</span>. Each episode I meet with researchers and company leaders to uncover how to become world-class.</p>
                <a href="#">
                  <button className="px-8 py-4 bg-purple-600 text-lg font-bold text-white rounded mt-2 lg:mt-4 shadow-lg hover:bg-purple-500">Listen to the podcast</button>
                </a>
            </div>
          </section>
        </div>

        <div className="text-xs text-gray-400 text-center my-4">&copy; 2020 Jered Odegard. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Blog;
