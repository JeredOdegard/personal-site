import Head from "next/head"

export default function Coaching() {
  return (
    <div id="main" className="antialiased">

      <Head>
        <title>Coaching : Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      {/* Mobile Nav */}
      <div id="mobileMenu" className="hidden w-full h-full fixed z-50 bg-white p-6 overflow-y-auto">
        <div className="w-full flex justify-between mb-6">
          <div className="h-20 w-16 bg-black flex items-center justify-center fill-current text-white relative -top-6 rounded-b-md">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
            </svg>
          </div>
          <button className="h-14 w-14 p-2 fill-current text-black hover:bg-black hover:text-white rounded-xl" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-4 lg:space-y-10 text-5xl lg:text-6xl text-black font-bold">
          <a className="block p-4 rounded hover:bg-gray-200 hover:text-gray-800" href="/">Home</a>
          <a className="block p-4 rounded hover:bg-gray-200 hover:text-gray-800" href="/coaching">Coaching</a>
          <a className="block p-4 rounded hover:bg-gray-200 hover:text-gray-800" href="/podcast">Podcast</a>
          <a className="block p-4 rounded hover:bg-gray-200 hover:text-gray-800" href="/about">About</a>
          <a className="block p-4 rounded hover:bg-gray-200 hover:text-gray-800" href="/about">Contact</a>
        </nav>
      </div>
      {/* Mobile Nav - End */}


      <div className="relative overflow-hidden h-24">
        <div className="max-w-screen-xl mx-auto">
          {/* Navbar */}
          <div className="flex justify-between pt-6 px-6 lg:px-14 xl:px-6">

            {/* Left Side */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="h-20 xl:h-16 w-16 bg-black flex items-center justify-center fill-current text-white text-opacity-100 absolute top-0 rounded-b-md xl:rounded-full xl:top-3 top-0">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
                </svg>
              </div>
              {/* Logo - End */}

              {/* Nav Items */}
              <nav className="hidden md:flex space-x-8 ml-24 text-base lg:text-lg font-bold">
                <a className="text-black text-opacity-50 hover:text-black" href="/">Home</a>
                <a className="text-black" href="/coaching">Coaching</a>
                <a className="text-black text-opacity-50 hover:text-black" href="/podcast">Podcast</a>
                <a className="text-black text-opacity-50 hover:text-black" href="/about">About</a>
              </nav>
              {/* Nav Items - End */}

            </div>
            {/* Left Side - End */}

            {/* Contact */}
            <a href="/contact">
              <button className="hidden md:flex px-4 py-2 bg-black bg-opacity-90 font-medium tracking-wide text-white hover:bg-opacity-100 transform transition hover:scale-105 text-base lg:text-lg rounded-full">Contact</button>
            </a>
            {/* Contact - End */}

            {/* Hamburger */}
            <button className="h-14 w-14 p-2 md:hidden fill-current text-black hover:text-white hover:bg-black rounded-xl" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Hamburger - End */}
          </div>
          {/* Navbar - End */}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 mt-10">
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:text-8xl md:max-w-screen-sm font-bold mb-4 text-opacity-90 mt-10">Coaching</h1>
          <p className="text-3xl text-black text-opacity-50 mb-10 leading-relaxed">Behind most top performing executives, athletes, and entrepreneurs is a great coach. How come?</p>
        </div>
        <div className="col-span-full lg:col-span-4">
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">Maybe you</h1>
          <ul className="text-xl text-black text-opacity-75 list-inside space-y-4 list-disc">
            <li>Have a solid career on paper</li>
            <li>Feel off track</li>
            <li>Seem slow or stuck</li>
            <li>Need more motivation</li>
            <li>Know you're capable of more</li>
            <li>Aren't pursuing what you really want</li>
            <li>Are making a big change</li>
          </ul>
        </div>
        <div className="col-span-full lg:col-span-4">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_1.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">One realization away</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">My purpose is to help create more authentic and capable leaders. If you’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <div className="border-t border-b border-gray-200 py-8 mb-10 md:flex justify-between items-center gap-x-10">
            <div>
              <h4 className="text-2xl text-black text-opacity-90 mb-4 font-extrabold">Could we be a fit?</h4>
              <p className="text-xl text-black text-opacity-75 leading-relaxed">Each coach is unique. The best way to see if we'd work well together is to meet. Give my coaching a try with a free sample session.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="w-40 bg-black bg-opacity-90 px-5 py-2 font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Book now</button>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">My purpose is to help create more authentic and capable leaders. If you’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10 leading-tight">Misfit relationship</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_2.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <p className="text-xl text-black text-opacity-75 mb-10 leading-relaxed">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">Executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10 leading-tight">A dynamic partnership</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">Executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_3.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">Lasting impact</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">Executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 my-10">
        <img className="w-full rounded-md" src="coaching_4.jpg" />
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6 mb-10">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">Executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
        <div className="col-span-4 bg-red-100 w-full h-48"></div>
        <div className="col-span-4 bg-red-100 w-full h-48"></div>
        <div className="col-span-4 bg-red-100 w-full h-48"></div>
      </div>

      <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
        <div className="col-span-2"></div>
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-black text-5xl md:max-w-screen-sm font-bold mb-8 text-opacity-90 mt-10">Offerings</h1>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">Executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>
          <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10 mb-10">
            <div className="col-span-full sm:col-span-1">
              <div className="font-bold text-black text-opacity-90 mb-2">Standard package</div>
              <p className="text-black text-opacity-75 mb-2">My secret is adapting the approach to each person. Together, we'll find a path that leverages what makes you unique.</p>
              <a className="text-yellow-600 font-medium" href="/contact">I'm interested</a>
            </div>
            <div className="col-span-full sm:col-span-1">
              <div className="font-bold text-black text-opacity-90 mb-2">Month-to-month</div>
              <p className="text-black text-opacity-75 mb-2">Coaching will double your awareness. After our conversations, you'll leave with clarity and motivation unlike before.</p>
              <a className="text-yellow-600 font-medium" href="/contact">I'm interested</a>
            </div>
          </div>
          <p className="text-xl text-black text-opacity-75 mb-10 leading-normal">You’re still selecting an executive coach or career consultant we are happy to walk you through case studies of clients in your field whom we’ve served, or clients who’ve faced comparable challenges and how we delivered value to their advancement. This way you can get a feel for who we serve.</p>

          <div className="border-t border-gray-200 py-8 mb-10 md:flex justify-between items-center gap-x-10">
            <div>
              <h4 className="text-2xl text-black text-opacity-90 mb-4 font-extrabold">Could we be a fit?</h4>
              <p className="text-xl text-black text-opacity-75 leading-relaxed">Each coach is unique. The best way to see if we'd work well together is to meet. Give my coaching a try with a free sample session.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="w-40 bg-black bg-opacity-90 px-5 py-2 font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Book now</button>
            </div>
          </div>

        </div>
        <div className="col-span-full lg:col-span-2">
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex text-xs text-gray-400 mb-6 pt-6 mt-14 border-t justify-between">
        <p className="pl-4 xl:pl-0">&copy; Odegard Research. All rights reserved.</p>
        <div className="space-x-8 pr-4 xl:pr-0">
          <a className="text-gray-800" href="https://www.linkedin.com/in/jered-odegard/">LinkedIn</a>
          <a className="text-gray-800" href="mailto:j@jeredodegard.com">Email</a>
        </div>
      </div>
    </div>
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