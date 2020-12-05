import Head from "next/head"

function Blog() {
  return (
    <div className="min-w-sm antialiased">
    
      <Head>
        <title>ALTERNATIVE - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-gray-900 p-24">

        <div className="w-96 mx-auto">
          <nav className="text-gray-400 flex justify-between gap-x-8">
            <a className="text-gray-100 font-bold" href="#">Home</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Coaching</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Podcast</a>
            <a className="hover:text-gray-200 hover:underline" href="#">Blog</a>
            <a className="hover:text-gray-200 hover:underline" href="#">About</a>
          </nav>
        </div>

        <div className="mt-20 mb-20 text-center">
          <h1 className="text-5xl md:text-7xl text-gray-100 font-bold font-serif leading-tight">Make your growth easy</h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-screen-lg mt-10 mx-auto">
          I'm a coach and former product leader. I help high performing professionals and executives at companies like <span className="font-bold text-gray-300">Amazon</span>,  <span className="font-bold text-gray-300">Facebook</span>, and <span className="font-bold text-gray-300">Microsoft</span> achieve their goals. I'm confident I can accelerate you towards where you want to be.
          </p>
          <a href="#">
            <button className="px-8 py-4 bg-purple-600 text-lg font-bold text-white rounded mt-8">What is coaching?</button>
          </a>
        </div>

        <div className="">
          <img className="rounded-lg" src="self.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
