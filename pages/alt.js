import Head from "next/head"

function Blog() {
  return (
    <div className="min-w-sm antialiased">
    
      <Head>
        <title>ALTERNATIVE - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-gray-900 p-24 pt-16">

        <div className="w-96 mx-auto">
          <nav className="text-gray-400 flex justify-between gap-x-8">
            <a className="text-gray-100 font-bold" href="#">Home</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Coaching</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Podcast</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Blog</a>
            <a className="hover:text-gray-200 hover:underline" href="#">About</a>
          </nav>
        </div>

        <div className="mt-20 mb-48 text-center">
          <h1 className="text-5xl md:text-7xl text-gray-100 font-bold font-serif leading-tight">I'm obsessed with results.</h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-screen-lg mt-4 mx-auto">
          After a decade in tech building teams and products, I left.
          </p>
          <a href="#">
            <button className="px-8 py-4 bg-purple-600 text-lg font-bold text-white rounded mt-8">See my story</button>
          </a>
        </div>

        <div className="w-full h-screen flex items-center mt-10 -mt-20 px-8 bg-white mb-24 rounded-xl">
          <section className="grid grid-cols-12 max-w-screen-xl lg:gap-x-20 mx-auto items-center">
            <div className="col-span-full xl:col-span-8">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 font-serif">Make your growth easy.</h2>
              <p className="text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500 max-w-screen">I help high performing professionals and executives at companies like <span className="font-bold text-gray-700">Amazon</span>,  <span className="font-bold text-gray-700">Facebook</span>, and <span className="font-bold text-gray-700">Microsoft</span> achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
                <a href="#">
                  <button className="px-8 py-4 bg-purple-600 text-lg font-bold text-white rounded mt-2 lg:mt-4 shadow-lg">What is coaching?</button>
                </a>
            </div>
            <div className="hidden xl:grid col-span-full mt-10 xl:mt-0 xl:col-span-4 mt-0">
              <img className="shadow-dark transform rotate-1 rounded" src="selft.jpg" />
            </div>
          </section>
        </div>
        <div className="text-xs text-gray-400 text-center my-4">&copy; 2020 Jered Odegard. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Blog;
