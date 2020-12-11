import Head from "next/head"

export default function Alt() {
  return (
    <div id="main" className="antialiased">

      <Head>
        <title>Alternative - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.png"  type="image/icon type" />
      </Head>

      {/* Mobile Nav */}
      <div id="mobileMenu" className="hidden w-full h-full fixed z-50 bg-white p-6 overflow-y-auto">
        <div className="w-full flex justify-between mb-6">
          <div className="h-20 w-16 bg-gray-900 flex items-center justify-center fill-current text-white relative -top-6 rounded-b-md">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
            </svg>
          </div>
          <button className="h-9 w-9 fill-current text-gray-800 " onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-4 lg:space-y-10 text-5xl lg:text-6xl text-gray-800 font-bold">
          <a className="block p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/">Home</a>
          <a className="block p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/coaching">Coaching</a>
          <a className="block p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/podcast">Podcast</a>
          <a className="block p-4 rounded-md hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800" href="/about">About</a>
          <a className="block p-4 rounded-md hover:bg-gray-100 hover:text-gray-800" href="/about">Contact</a>
        </nav>
      </div>
      {/* Mobile Nav - End */}

      <div className="absolute transform top-0 -skew-y-12 w-full h-128 origin-top-left bg-yellow-300 xl:rounded-full"></div>

      <div className="relative overflow-hidden h-128">
        <div className="max-w-screen-xl mx-auto">
          {/* Navbar */}
          <div className="flex justify-between pt-6 px-6 lg:px-14">

            {/* Left Side */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="h-20 xl:h-16 w-16 bg-yellow-400 flex items-center justify-center fill-current text-white text-opacity-100 absolute top-0 rounded-b-md xl:rounded-xl xl:top-3 top-0">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
                </svg>
              </div>
              {/* Logo - End */}

              {/* Nav Items */}
              <nav className="hidden md:flex space-x-8 ml-24 text-base lg:text-lg font-medium">
                <a className="text-white" href="/">Home</a>
                <a className="text-white text-opacity-60 hover:text-white" href="/coaching">Coaching</a>
                <a className="text-white text-opacity-60 hover:text-white" href="/podcast">Podcast</a>
                <a className="text-white text-opacity-60 hover:text-white" href="/about">About</a>
              </nav>
              {/* Nav Items - End */}

            </div>
            {/* Left Side - End */}

            {/* Contact */}
            <a href="/contact">
              <button className="hidden md:flex px-4 py-2 bg-white bg-opacity-30 font-medium tracking-wide text-white hover:bg-opacity-40 transform transition hover:scale-105 text-base lg:text-lg rounded-full">Contact</button>
            </a>
            {/* Contact - End */}

            {/* Hamburger */}
            <button className="h-9 w-9 md:hidden bg-white bg-opacity-0 fill-current text-white text-opacity-60 hover:bg-opacity-30 rounded" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Hamburger - End */}
          </div>
          {/* Navbar - End */}
        </div>
      </div>


      {/* Hero */}
      <div className="max-w-screen-xl mx-auto -mt-96 md:-mt-72 relative z-10 px-6 lg:px-14">
        <h1 className="text-black text-5xl md:text-8xl md:max-w-screen-sm font-bold mb-4 text-opacity-90 mt-10">Leadership fascinates me.</h1>
        <p className="text-2xl text-black text-opacity-60 mb-10">My purpose is to help create more authentic and capable leaders.</p>
        <button className="bg-gray-800 bg-opacity-95 px-6 py-2.5 text-sm font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Read my story</button>
      </div>
      {/* Hero - End */}

    {/* Logos */}
      <div className="max-w-screen-xl mx-auto mt-32 text-center md:text-left md:mt-60 px-6 lg:px-14">
        <h3 className="text-sm uppercase tracking-wide font-bold text-black text-opacity-80">Trusted by leaders at</h3>
      </div>

      <div className="grid grid-cols-12 gap-x-0 gap-y-10 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto mt-10 mb-20 border-l border-r border-dashed border-gray-300">
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" className="w-48"><title>Amazon logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #EFA82E)" d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 0 1-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0 0 24.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"></path><path fill="var(--userLogoColor, #EFA82E)" d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"></path><path fill="var(--userLogoColor, #1B1A19)" d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 0 0-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 0 1-.54-.53M73.2 28.26h-2.88a.54.54 0 0 1-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 0 1 3.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 0 1-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 0 1-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 0 1-.51-.52V13a.55.55 0 0 1 .55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 0 1-.55.46h-2.88a.54.54 0 0 1-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 0 1-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 0 1 3.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 0 1-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 0 1 3.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"></path></g></svg>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" className="w-48"><title>Google logo</title><g fill="none" fill-rule="evenodd"><path fill="#EA4335" fill-rule="nonzero" d="M92.6 21.65a8.28 8.28 0 0 1-8.41 8.38 8.28 8.28 0 0 1-8.4-8.38 8.25 8.25 0 0 1 8.4-8.38c4.63 0 8.4 3.52 8.4 8.38zm-3.69 0c0-3.02-2.19-5.08-4.72-5.08-2.54 0-4.73 2.06-4.73 5.08 0 2.98 2.19 5.07 4.73 5.07 2.53 0 4.72-2.1 4.72-5.07z"></path><path fill="#FBBC05" fill-rule="nonzero" d="M110.73 21.65a8.28 8.28 0 0 1-8.41 8.38 8.28 8.28 0 0 1-8.4-8.38 8.26 8.26 0 0 1 8.4-8.38c4.63 0 8.4 3.52 8.4 8.38zm-3.68 0c0-3.02-2.2-5.08-4.73-5.08-2.54 0-4.73 2.06-4.73 5.08 0 2.98 2.2 5.07 4.73 5.07 2.54 0 4.73-2.1 4.73-5.07z"></path><path fill="var(--userLogoColor, #4285F4)" fill-rule="nonzero" d="M128.1 13.77v15.05c0 6.18-3.65 8.71-7.96 8.71a7.98 7.98 0 0 1-7.43-4.94l3.2-1.33a4.63 4.63 0 0 0 4.23 2.97c2.76 0 4.47-1.7 4.47-4.9v-1.21h-.13a5.7 5.7 0 0 1-4.41 1.9c-4.2 0-8.03-3.65-8.03-8.34 0-4.73 3.84-8.41 8.03-8.41 2 0 3.58.88 4.41 1.87h.13v-1.36h3.5zm-3.23 7.9c0-2.94-1.97-5.1-4.47-5.1-2.54 0-4.67 2.16-4.67 5.1 0 2.93 2.13 5.05 4.67 5.05 2.5 0 4.47-2.12 4.47-5.04z"></path><path fill="var(--userLogoColor, #34A853)" fill-rule="nonzero" d="M133.86 4.96V29.5h-3.59V4.96z"></path><path fill="var(--userLogoColor, #EA4335)" fill-rule="nonzero" d="M147.85 24.4l2.86 1.9a8.34 8.34 0 0 1-6.99 3.72 8.2 8.2 0 0 1-8.31-8.38c0-4.98 3.58-8.38 7.9-8.38 4.35 0 6.48 3.46 7.17 5.33l.38.96-11.2 4.63a4.26 4.26 0 0 0 4.06 2.54c1.88 0 3.18-.92 4.13-2.32zm-8.8-3.01l7.5-3.11c-.42-1.05-1.65-1.78-3.11-1.78a4.6 4.6 0 0 0-4.38 4.89z"></path><path fill="var(--userLogoColor, #4285F4)" fill-rule="nonzero" d="M62.2 19.47V15.9h11.98c.11.62.17 1.35.17 2.15 0 2.66-.73 5.96-3.08 8.31-2.28 2.38-5.2 3.65-9.07 3.65-7.17 0-13.2-5.84-13.2-13C49 9.83 55.03 4 62.2 4c3.97 0 6.8 1.56 8.92 3.59l-2.51 2.5a9.06 9.06 0 0 0-6.41-2.54 9.33 9.33 0 0 0-9.34 9.46c0 5.24 4.1 9.46 9.34 9.46a8.7 8.7 0 0 0 6.57-2.6c1-1.01 1.66-2.45 1.92-4.4h-8.5z"></path></g></svg>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" class="w-48"><title>Slack logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #000)" fill-rule="nonzero" d="M80.95 28.15l1.32-3.06a8.8 8.8 0 0 0 5.2 1.62c1.38 0 2.25-.53 2.25-1.34-.02-2.26-8.28-.49-8.34-6.15-.03-2.87 2.53-5.08 6.15-5.08 2.15 0 4.3.53 5.83 1.75L92.12 19a9.32 9.32 0 0 0-4.8-1.53c-1.13 0-1.88.53-1.88 1.21.02 2.21 8.34 1 8.43 6.4 0 2.94-2.49 5-6.07 5-2.61 0-5.02-.62-6.85-1.94M131.59 24a3.8 3.8 0 1 1 0-3.74l3.64-2.02a7.98 7.98 0 1 0 0 7.78l-3.64-2.02zM95.7 7.53h4.55v22.26H95.7zM137.01 7.53V29.8h4.56v-6.68l5.4 6.68h5.84l-6.88-7.93 6.37-7.4h-5.58l-5.15 6.15V7.53zM113.8 24.03a4.2 4.2 0 0 1-3.56 1.9 3.8 3.8 0 1 1 0-7.62c1.53 0 2.9.85 3.55 1.96v3.76zm0-9.57v1.8c-.75-1.25-2.6-2.12-4.54-2.12-4 0-7.15 3.53-7.15 7.95 0 4.43 3.15 8 7.15 8 1.94 0 3.79-.87 4.53-2.13v1.8h4.56v-15.3h-4.56z"></path><path fill="var(--userLogoColor, #E01E5A)" fill-rule="nonzero" d="M52.79 24a2.8 2.8 0 1 1-2.81-2.8h2.81V24zm1.4 0a2.8 2.8 0 1 1 5.62 0v7.02a2.8 2.8 0 1 1-5.62 0v-7.01z"></path><path fill="var(--userLogoColor, #36C5F0)" fill-rule="nonzero" d="M57 12.74a2.8 2.8 0 1 1 2.81-2.8v2.8h-2.8zm0 1.42a2.8 2.8 0 1 1 0 5.62h-7.04a2.8 2.8 0 1 1 0-5.62H57z"></path><path fill="var(--userLogoColor, #2EB67D)" fill-rule="nonzero" d="M68.26 16.97a2.8 2.8 0 1 1 2.81 2.8h-2.8v-2.8zm-1.4 0a2.8 2.8 0 1 1-5.62 0V9.93a2.8 2.8 0 1 1 5.62 0v7.04z"></path><path fill="var(--userLogoColor, #ECB22E)" fill-rule="nonzero" d="M64.05 28.22a2.8 2.8 0 1 1-2.81 2.8v-2.8h2.8zm0-1.4a2.8 2.8 0 1 1 0-5.62h7.04a2.8 2.8 0 1 1 0 5.61h-7.04z"></path></g></svg>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" class="w-48"><title>Lyft logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #FF00BF)" fill-rule="nonzero" d="M75.18 3.6h7.71v20.74c0 3.3 1.49 5.25 2.7 6.07-1.26 1.1-5.08 2.08-7.95-.28-1.7-1.39-2.46-3.7-2.46-5.86V3.59zm48.15 17.25v-2.19h2.36v-7.64h-2.59A10.18 10.18 0 0 0 103 13.21v17.82a6.4 6.4 0 0 0 5.12-1.39c1.7-1.39 2.46-3.7 2.46-5.86v-.67h3.85v-7.64h-3.85v-2.31a2.59 2.59 0 1 1 5.18 0v7.66a10.2 10.2 0 0 0 10.17 10.2v-7.6a2.58 2.58 0 0 1-2.59-2.57zM94.17 11v11.23c0 .65-.54 1.16-1.18 1.16-.64 0-1.18-.51-1.18-1.16V11h-7.6v13.19c0 2.36.78 5.37 4.45 6.35 3.66.98 5.77-1.05 5.77-1.05-.2 1.33-1.44 2.31-3.46 2.52a10.5 10.5 0 0 1-4.46-.78v7c2.48.74 5.1.98 7.69.46 4.66-.9 7.6-4.8 7.6-10.03V10.95h-7.63V11z"></path></g></svg>
        </div>
      </div>
      {/* Logos - End */}

      {/* Coach Section */}
      <div className="w-full pt-16 lg:py-24 bg-white xl:mb-32 px-6 lg:px-14">
        <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto">
          <div className="col-span-full lg:col-span-6 flex items-center">
            <div>
              <h3 className="text-lg font-bold text-yellow-600 text-opacity-80 mb-3">Certified coach</h3>
              <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">Fast-track your growth.</h2>
              <p className="text-black text-opacity-60 text-lg mb-6 font-medium">I help high performing professionals and executives achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
              <button className="bg-yellow-600 bg-opacity-90 px-5 py-2 text-sm font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">What is coaching?</button>
              <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10">
                <div className="col-span-full sm:col-span-1">
                  <div className="font-medium text-black text-opacity-90 text-sm mb-2">A plan that works for you</div>
                  <p className="text-black text-opacity-70 text-sm mb-2">My secret is adapting the approach to each person. Together, we'll find a path that leverages what makes you unique.</p>
                  <a className="text-sm text-yellow-600 font-medium" href="#">Discover yours</a>
                </div>
                <div className="col-span-full sm:col-span-1">
                  <div className="font-medium text-black text-opacity-90 text-sm mb-2">Breakthrough insight</div>
                  <p className="text-black text-opacity-70 text-sm mb-2">Coaching will double your awareness. After our conversations, you'll leave with clarity and motivation unlike before.</p>
                  <a className="text-sm text-yellow-600 font-medium" href="#">How it works</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2"></div>
          <div className="col-span-full lg:col-span-4 flex md:grid justify-center items-end">
            <img className="w-72 lg:w-full bg-transparent rounded-sm" src="clip_bw.png" />
          </div>
        </div>
      </div>
      {/* Coach Section - End */}

      {/* Podcast Section */}
      <div className="hidden xl:block absolute transform xl:-skew-y-12 w-full h-160 origin-top-left bg-gray-warm rounded-full rounded-tr-none"></div>
      <div className="relative pt-16 pb-16 xl:pt-0 xl:-mt-24 xl:mb-10 px-6 lg:px-14 bg-gray-warm xl:bg-transparent">
        <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto relative z-10">
          <div className="col-span-full md:col-span-5 flex justify-center items-center md:justify-start md:flex-none">
            <img className="w-72 mb-10 md:mb-0 md:w-full bg-transparent shadow-medium" src="podcast.jpg" />
          </div>
          <div className="md:col-span-1"></div>
          <div className="col-span-full md:col-span-6 flex items-center">
            <div className="">
              <h3 className="text-lg font-bold text-purple-600 text-opacity-80 mb-3">Podcast host</h3>
              <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">Learn from the best.</h2>
              <p className="text-black text-opacity-60 text-lg mb-6 font-medium">I host the <span className="text-black text-opacity-80 font-medium">Jered O Show</span>. Each episode we meet with company leaders or pioneering researchers to uncover the practice of world-class teams.</p>
              <button className="bg-purple-600 bg-opacity-90 px-5 py-2 text-sm font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Listen to the podcast</button>
              <div className="mt-14 grid grid-cols-2 gap-x-10">
                <div className="col-span-1">
                  <div className="font-bold text-black text-opacity-90 text-xl mb-2">5/5</div>
                  <p className="text-black text-opacity-70 text-sm mb-2">Rating on Apple</p>
                </div>
                <div className="col-span-1">
                  <div className="font-bold text-black text-opacity-90 text-xl mb-2">200+</div>
                  <p className="text-black text-opacity-70 text-sm mb-2">Minutes of content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Podcast Section - End */}


      {/* Training Section */}
      <div className="w-full pt-16 bg-white mb-8 lg:mb-24 px-6 lg:px-14 xl:mt-40">
        <div className="grid grid-cols-12 gap-x-2 gap-y-10 md:gap-y-14 md:gap-x-10 max-w-screen-xl mx-auto">
          <div className="col-span-full lg:col-span-6 flex items-center">
            <div>
              <h3 className="text-lg font-bold text-blue-600 text-opacity-80 mb-3">Coming soon</h3>
              <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">Training programs that work.</h2>
              <p className="text-black text-opacity-60 text-lg mb-6 font-medium">Unlock your full leadership potential in record time with strategic learning, a peer community, and personalized coaching.</p>
              <button className="bg-blue-600 bg-opacity-90 px-5 py-2 text-sm font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Join the waitlist</button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-6"></div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Manage the transition</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Coaching will double your self-awareness. After our conversations, you'll leave with clarity and motivation.</p>
            <a className="text-sm text-blue-600 font-medium" href="#">Get notified</a>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Hire the best</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Coaching will double your self-awareness. After our conversations, you'll leave with clarity and motivation.</p>
            <a className="text-sm text-blue-600 font-medium" href="#">Get notified</a>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Maximize performance</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Coaching will double your self-awareness. After our conversations, you'll leave with clarity and motivation.</p>
            <a className="text-sm text-blue-600 font-medium" href="#">Get notified</a>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Scale your influence</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Coaching will double your self-awareness. After our conversations, you'll leave with clarity and motivation.</p>
            <a className="text-sm text-blue-600 font-medium" href="#">Get notified</a>
          </div>
        </div>
      </div>
      {/* Training Section */}

      <div className="text-center text-xs text-gray-400 mb-6">&copy; Odegard Research. All rights reserved.</div>
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