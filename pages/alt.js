import Head from "next/head"

export default function Alt() {
  return (
    <div className="pb-20">

      <Head>
        <title>Alternative - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.png"  type="image/icon type" />
      </Head>

      <div className="relative overflow-hidden h-128">
        <div className="absolute transform top-0 -skew-y-12 w-full h-full origin-top-left bg-gradient-to-tl from-pink-500 via-purple-500 to-blue-300"></div>
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-14">
          {/* Navbar */}
          <div className="flex justify-between pt-6">

            {/* Left Side */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="h-20 w-16 bg-black bg-opacity-60 flex items-center justify-center fill-current text-white absolute top-0 rounded-b-md">
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
                </svg>
              </div>
              {/* Logo - End */}

              {/* Nav Items */}
              <nav className="hidden md:flex space-x-8 ml-24 text-sm lg:text-base">
                <a className="font-bold text-white" href="/">Home</a>
                <a className="text-white text-opacity-60 hover:text-white" href="/coaching">Coaching</a>
                <a className="text-white text-opacity-60 hover:text-white" href="/podcast">Podcast</a>
                <a className="text-white text-opacity-60 hover:text-white" href="/about">About</a>
              </nav>
              {/* Nav Items - End */}

            </div>
            {/* Left Side - End */}

            {/* Contact */}
            <a href="/contact">
              <button className="hidden md:flex px-4 py-2 bg-white bg-opacity-30 font-medium tracking-wide text-white hover:bg-opacity-40 transform transition hover:scale-105 hover:shadow-lg text-sm rounded-full">Contact</button>
            </a>
            {/* Contact - End */}

            {/* Hamburger */}
            <button className="h-9 w-9 md:hidden bg-white bg-opacity-0 fill-current text-white text-opacity-60 hover:bg-opacity-30 rounded" onClick={toggleMobileNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Hamburger - End */}
          </div>
          {/* Navbar - End */}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto -mt-96 md:-mt-72 relative z-10 px-6 md:px-14">
        <h1 className="text-black text-5xl md:text-8xl md:max-w-screen-sm font-bold mb-4 text-opacity-80 mt-10">Leadership fascinates me.</h1>
        <p className="text-2xl text-black text-opacity-60 mb-10">My purpose is to help create more authentic and capable leaders.</p>
        <button className="bg-gray-800 bg-opacity-95 px-6 py-2.5 text-sm font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Read my story</button>
      </div>
    </div>
  )
}

function toggleMobileNav() {
  alert("Mobile navigation activated.")
}