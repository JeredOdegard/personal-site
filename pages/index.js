import Head from "next/head"
import Link from "next/link"
import Container from "components/container"
import MobileMenu from "components/mobilemenu"

export default function Home() {
  return (
    <Container>

      <Head>
        <title>Jered Odegard : Leadership, career, and executive coaching</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <MobileMenu click={toggleNav} />

      <div className="absolute transform top-0 -skew-y-12 w-full h-128 origin-top-left bg-yellow-300 xl:rounded-full"></div>

      <div className="relative overflow-hidden h-128">
        <div className="max-w-screen-xl mx-auto">
          {/* Navbar */}
          <div className="flex justify-between pt-6 px-6 lg:px-14 xl:px-6">

            {/* Left Side */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="h-20 xl:h-16 w-16 bg-yellow-400 flex items-center justify-center fill-current text-white text-opacity-100 absolute top-0 rounded-b-md xl:rounded-full xl:top-3 top-0">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
                </svg>
              </div>
              {/* Logo - End */}

              {/* Nav Items */}
              <nav className="hidden md:flex space-x-8 ml-24 text-base lg:text-lg font-bold">
                <Link href="/"><a className="text-white">Home</a></Link>
                <a className="text-white text-opacity-70 hover:text-white" href="https://odegard.group">Coaching</a>
                <Link href="/podcast"><a className="text-white text-opacity-70 hover:text-white" href="/podcast">Podcast</a></Link>
                <Link href="/about"><a className="text-white text-opacity-70 hover:text-white" href="/about">About</a></Link>
              </nav>
              {/* Nav Items - End */}

            </div>
            {/* Left Side - End */}

            {/* Contact */}
            <a href="/contact">
              <button className="hidden md:flex px-4 py-2 bg-yellow-400 bg-opacity-80 font-medium tracking-wide text-white hover:bg-opacity-100 transform transition hover:scale-105 text-base lg:text-lg rounded-full">Contact</button>
            </a>
            {/* Contact - End */}

            {/* Hamburger */}
            <button className="h-14 w-14 p-2 md:hidden fill-current text-white hover:bg-yellow-400 rounded-xl" onClick={toggleNav}>
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
      <div className="max-w-screen-xl mx-auto -mt-96 md:-mt-72 relative z-10 px-6 lg:px-14 xl:px-6">
        <h1 className="text-black text-5xl md:text-8xl md:max-w-screen-sm font-bold mb-4 text-opacity-90 mt-10">Leadership fascinates me.</h1>
        <p className="text-2xl text-black text-opacity-60 mb-10">My purpose is to help create more authentic and capable leaders.</p>
        <a href="/about"><button className="bg-black bg-opacity-90 px-6 py-2.5 text-sm font-medium rounded-full tracking-wide text-white shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Read my story</button></a>
      </div>
      {/* Hero - End */}

    {/* Logos */}
      <div className="max-w-screen-xl mx-auto mt-32 text-center md:text-left md:mt-60 px-6 lg:px-14 xl:px-6">
        <h3 className="text-sm uppercase tracking-wide font-bold text-black text-opacity-80">Trusted by leaders at</h3>
      </div>

      <div className="grid grid-cols-12 gap-x-0 gap-y-10 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto mt-10 mb-20 border-l border-r border-dashed border-gray-300">
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg className="w-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
            <g fillRule="nonzero" fill="none">
              <path d="M78.288 22.47l-.891 2.535h-.075a18.046 18.046 0 00-.866-2.485l-4.778-12.054H67v19.21h3.094V17.823c0-.745 0-1.59-.025-2.634-.024-.522-.074-.92-.099-1.218h.075c.148.746.321 1.293.445 1.64l5.743 14.017h2.178l5.694-14.14c.124-.324.247-.97.371-1.517h.074a179.972 179.972 0 00-.148 3.455v12.177h3.292V10.417h-4.505L78.288 22.47zm12.525-6.636h3.218v13.768h-3.218V15.834zm1.634-5.815c-.545 0-.99.199-1.362.547-.371.348-.57.795-.57 1.342 0 .522.199.969.57 1.317.372.348.817.522 1.362.522a1.97 1.97 0 001.361-.522c.371-.348.57-.795.57-1.317 0-.522-.199-.97-.57-1.342-.322-.348-.792-.547-1.361-.547m12.995 5.691a8.942 8.942 0 00-1.807-.199c-1.46 0-2.797.323-3.91.97-1.115.646-2.006 1.54-2.575 2.659-.594 1.143-.891 2.46-.891 3.976 0 1.317.297 2.485.866 3.554.57 1.044 1.362 1.889 2.426 2.46 1.015.572 2.203.87 3.54.87 1.534 0 2.846-.323 3.886-.92l.025-.024v-2.983l-.124.1a5.524 5.524 0 01-1.56.82c-.569.199-1.089.298-1.534.298-1.287 0-2.302-.373-3.02-1.193-.743-.795-1.114-1.889-1.114-3.255 0-1.417.371-2.535 1.139-3.355.767-.82 1.782-1.243 3.02-1.243 1.04 0 2.104.348 3.07 1.044l.123.1v-3.157l-.025-.025c-.42-.174-.891-.373-1.535-.497m10.62-.1c-.792 0-1.535.25-2.179.771-.544.447-.916 1.094-1.237 1.864h-.025v-2.41h-3.218v13.767h3.218V22.57c0-1.193.247-2.187.792-2.907.545-.746 1.238-1.119 2.08-1.119.296 0 .593.075.965.124.346.1.594.2.767.324l.124.099v-3.23l-.074-.026c-.223-.149-.669-.223-1.213-.223m8.762-.075c-2.252 0-4.06.671-5.322 1.988-1.287 1.317-1.906 3.132-1.906 5.418 0 2.137.644 3.877 1.882 5.144 1.237 1.243 2.92 1.89 5.025 1.89 2.203 0 3.96-.672 5.223-2.014 1.287-1.342 1.906-3.131 1.906-5.343 0-2.187-.594-3.927-1.807-5.194-1.164-1.268-2.872-1.889-5-1.889m2.574 10.587c-.594.77-1.535 1.143-2.698 1.143-1.164 0-2.104-.373-2.773-1.193-.668-.77-.99-1.888-.99-3.305 0-1.466.347-2.585.99-3.38.669-.795 1.584-1.193 2.748-1.193 1.139 0 2.03.373 2.673 1.143.644.77.99 1.89.99 3.355-.05 1.492-.321 2.66-.94 3.43m11.411-4.573c-1.015-.422-1.658-.745-1.955-1.019-.248-.248-.372-.596-.372-1.043 0-.373.149-.746.52-.995.372-.248.792-.372 1.411-.372.545 0 1.114.1 1.659.248.544.15 1.04.373 1.435.671l.124.1v-3.032l-.074-.025a8.905 8.905 0 00-1.46-.423 9.885 9.885 0 00-1.585-.149c-1.535 0-2.797.373-3.787 1.193-.99.77-1.46 1.814-1.46 3.032 0 .646.098 1.218.321 1.69s.545.92.99 1.292c.446.348 1.09.746 1.98 1.119.743.323 1.313.571 1.66.77.346.199.568.423.742.597.124.198.198.447.198.77 0 .92-.693 1.367-2.104 1.367-.545 0-1.114-.1-1.783-.323a6.876 6.876 0 01-1.807-.92l-.123-.1v3.157l.074.025c.47.224 1.04.373 1.733.547.693.124 1.312.223 1.856.223 1.659 0 3.02-.372 3.986-1.193.99-.795 1.51-1.814 1.51-3.131 0-.92-.248-1.74-.793-2.36a10.029 10.029 0 00-2.896-1.716m12.179-6.014c-2.253 0-4.06.671-5.322 1.988-1.262 1.317-1.906 3.132-1.906 5.418 0 2.137.644 3.877 1.881 5.144 1.238 1.243 2.921 1.89 5.025 1.89 2.203 0 3.96-.672 5.223-2.014 1.287-1.342 1.906-3.131 1.906-5.343 0-2.187-.594-3.927-1.807-5.194-1.163-1.268-2.871-1.889-5-1.889m2.55 10.587c-.594.77-1.535 1.143-2.699 1.143-1.188 0-2.104-.373-2.772-1.193-.668-.77-.99-1.888-.99-3.305 0-1.466.346-2.585.99-3.38.668-.795 1.584-1.193 2.748-1.193 1.114 0 2.03.373 2.673 1.143.644.77.99 1.89.99 3.355 0 1.492-.322 2.66-.94 3.43M175 18.493v-2.659h-3.243V11.76l-.099.024-3.07.92-.073.025v3.106h-4.852v-1.74c0-.795.198-1.416.544-1.814.347-.397.867-.596 1.51-.596.446 0 .916.1 1.436.323l.124.075V9.273l-.074-.024c-.446-.15-1.04-.249-1.807-.249-.966 0-1.807.224-2.575.596a4.302 4.302 0 00-1.757 1.765c-.421.746-.644 1.59-.644 2.56v1.913h-2.252v2.635h2.252v11.133h3.243V18.493h4.852v7.083c0 2.908 1.361 4.374 4.084 4.374.445 0 .916-.074 1.361-.149.47-.1.817-.223 1.015-.323l.025-.025v-2.659l-.124.1a2.088 2.088 0 01-.668.298c-.248.074-.47.1-.644.1-.643 0-1.089-.15-1.41-.523-.298-.348-.446-.92-.446-1.764v-6.512H175z" fill="#737373"/>
              <path fill="#F25022" d="M25 4h15v15H25z"/>
              <path fill="#7FBA00" d="M42 4h15v15H42z"/>
              <path fill="#00A4EF" d="M25 21h15v15H25z"/>
              <path fill="#FFB900" d="M42 21h15v15H42z"/>
            </g>
          </svg>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg className="w-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
            <path d="M40.026 34h-5.369V20.69H31v-4.332h3.657v-3.084C34.657 9.62 36.275 7 41.63 7c1.132 0 2.91.227 2.91.227v4.024h-1.867c-1.903 0-2.646.575-2.646 2.166v2.94h4.442l-.396 4.334h-4.046V34zM51.88 16c-.077 0-.156.003-.234.005-4.876 0-7.107 3.655-7.107 8.843 0 6.536 2.894 9.152 7.145 9.152 2.433 0 4.031-1.02 5.002-2.924v2.582h5.002V16.342h-5.002v2.663C55.893 17.29 54.25 16.02 51.88 16zm1.286 3.6c1.939 0 3.102 1.43 3.102 3.86l.005 2.484c0 1.639-.961 3.556-3.107 3.556-3.3 0-3.211-3.765-3.211-5.02 0-4.217 1.757-4.88 3.21-4.88zm10.328 5.394c0-2.106-.098-8.994 8.593-8.994 3.489 0 4.945 1.145 4.945 1.145l-1.17 3.75s-1.455-.827-3.351-.827c-2.428 0-3.977 1.454-3.977 4.011l.002 1.834c0 2.457 1.495 4.098 3.98 4.098 1.727 0 3.319-.835 3.319-.835l1.168 3.671S75.67 34 72.11 34c-8.275 0-8.617-6.18-8.617-9.006zm43.459-9.141c4.838 0 7.086 3.686 7.086 8.918 0 6.591-2.871 9.229-7.089 9.229-2.413 0-4.197-1.029-5.16-2.949v2.604l-4.9-.002V7.46l5.202-.46v11.642c.75-2.037 3.218-2.79 4.861-2.79zm-1.917 3.747c-2.167 0-3.628 1.43-3.628 3.86l-.005 2.484c-.004 1.639 1.012 3.556 3.633 3.556 3.686 0 3.587-3.765 3.587-5.02 0-4.217-1.964-4.88-3.587-4.88zM86.353 16c-5.51 0-8.418 2.996-8.418 8.32v.99c0 6.91 4.084 8.69 8.954 8.69 4.733 0 6.875-1.32 6.875-1.32l-.977-3.517s-2.52 1.07-5.272 1.07c-2.852 0-4.08-.726-4.394-3.46h11.06v-2.821c0-5.776-3.263-7.952-7.828-7.952zm.293 3.6c1.873 0 3.087 1.085 3.02 3.6h-6.315c.11-2.647 1.418-3.6 3.295-3.6zm37.806-3.6c-5.64 0-8.608 3.188-8.608 8.9 0 7.838 5.118 9.1 8.617 9.1 5.124 0 8.533-2.767 8.533-9.028 0-6.518-3.833-8.972-8.542-8.972zm-.545 3.6c2.63 0 3.67 1.87 3.67 4v1.83c0 2.578-1.457 4.07-3.68 4.07-2.079 0-3.54-1.395-3.54-4.07V23.6c0-2.854 1.739-4 3.55-4zm19.5-3.6c-5.64 0-8.608 3.188-8.608 8.9 0 7.838 5.117 9.1 8.617 9.1 5.123 0 8.532-2.767 8.532-9.028 0-6.518-3.833-8.972-8.542-8.972zm-.545 3.6c2.629 0 3.67 1.87 3.67 4v1.83c0 2.578-1.457 4.07-3.68 4.07-2.08 0-3.54-1.395-3.54-4.07V23.6c0-2.854 1.738-4 3.55-4zm10.891 13.5V7.45l5.261-.45v17.192l5.22-8.192h5.556l-5.445 8.485L170 33.1h-5.572l-5.414-8.365V33.1h-5.26z" fill="#1877F2" fillRule="nonzero"/>
          </svg>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg className="w-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
            <g fill="none" fillRule="evenodd">
              <path d="M113.548 29.376c-6.123 4.32-15 6.624-22.641 6.624-10.715 0-20.362-3.792-27.66-10.1-.573-.496-.06-1.172.629-.786 7.875 4.385 17.614 7.023 27.673 7.023 6.784 0 14.247-1.343 21.11-4.13 1.036-.421 1.903.65.89 1.37" fill="#F90"/>
              <path d="M115.303 26.408c-.744-.872-4.936-.412-6.818-.208-.573.064-.66-.392-.144-.72 3.339-2.147 8.817-1.527 9.456-.808.639.724-.167 5.742-3.304 8.137-.481.368-.94.172-.726-.316.704-1.607 2.284-5.21 1.536-6.085" fill="#F90"/>
              <path d="M108.569 8.084V5.623c0-.373.256-.623.564-.623h9.99c.321 0 .578.255.578.623V7.73c-.005.353-.274.815-.753 1.546l-5.177 8.154c1.924-.051 3.955.265 5.699 1.35.393.244.5.603.53.957v2.626c0 .359-.36.779-.735.562-3.074-1.778-7.157-1.972-10.555.018-.347.208-.71-.207-.71-.565v-2.495c0-.401.004-1.085.368-1.693l5.998-9.489h-5.22c-.32 0-.577-.25-.577-.618M69.85 23h-3.267a.628.628 0 01-.583-.578V4.993c0-.348.28-.625.63-.625h3.045c.317.014.57.267.593.582V7.23h.06C71.122 5.027 72.615 4 74.628 4c2.044 0 3.32 1.027 4.24 3.229C79.658 5.027 81.454 4 83.379 4c1.369 0 2.867.587 3.78 1.906 1.035 1.466.823 3.596.823 5.464l-.004 11c0 .348-.28.63-.63.63h-3.261a.635.635 0 01-.589-.63v-9.238c0-.735.065-2.57-.091-3.267-.244-1.17-.974-1.5-1.92-1.5-.79 0-1.618.55-1.953 1.429-.335.878-.303 2.35-.303 3.338v9.238c0 .348-.28.63-.63.63H75.34a.631.631 0 01-.588-.63l-.005-9.238c0-1.944.308-4.805-2.012-4.805-2.348 0-2.256 2.79-2.256 4.805v9.238c0 .348-.28.63-.63.63M128.944 4C133.522 4 136 8.246 136 13.645c0 5.217-2.738 9.355-7.056 9.355-4.496 0-6.944-4.246-6.944-9.537C122 8.138 124.478 4 128.944 4m.026 3.492c-2.274 0-2.418 3.346-2.418 5.432 0 2.09-.03 6.552 2.392 6.552 2.39 0 2.504-3.6 2.504-5.793 0-1.444-.057-3.168-.46-4.537-.348-1.19-1.038-1.654-2.018-1.654M143.725 23h-3.15a.627.627 0 01-.57-.63L140 4.936a.615.615 0 01.61-.568h2.933a.617.617 0 01.565.487V7.52h.058c.885-2.383 2.127-3.52 4.312-3.52 1.42 0 2.804.55 3.694 2.054.828 1.394.828 3.74.828 5.426v10.97a.622.622 0 01-.61.55h-3.173a.618.618 0 01-.56-.55v-9.466c0-1.906.204-4.695-1.981-4.695-.77 0-1.478.554-1.83 1.395-.444 1.065-.502 2.125-.502 3.3v9.386a.63.63 0 01-.619.63M99.864 14.615c0 1.296.033 2.376-.626 3.526-.532.936-1.38 1.51-2.317 1.51-1.285 0-2.038-.972-2.038-2.408 0-2.833 2.556-3.348 4.981-3.348v.72m3.376 8.104a.703.703 0 01-.79.08c-1.112-.917-1.315-1.342-1.922-2.217C98.692 22.444 97.388 23 95.01 23 92.19 23 90 21.274 90 17.819c0-2.699 1.469-4.536 3.569-5.434 1.817-.795 4.355-.936 6.295-1.155v-.43c0-.79.061-1.726-.41-2.409-.404-.613-1.186-.865-1.878-.865-1.276 0-2.41.65-2.689 1.997-.056.3-.277.594-.584.608l-3.244-.346c-.273-.061-.579-.28-.499-.697C91.304 5.178 94.864 4 98.047 4c1.629 0 3.757.43 5.042 1.655 1.63 1.51 1.474 3.526 1.474 5.72v5.181c0 1.557.65 2.24 1.262 3.082.212.299.259.66-.014.884a141.79 141.79 0 00-2.566 2.207l-.005-.01M57.862 14.615c0 1.296.033 2.376-.626 3.526-.532.936-1.375 1.51-2.316 1.51-1.285 0-2.034-.972-2.034-2.408 0-2.833 2.556-3.348 4.976-3.348v.72m3.375 8.104a.703.703 0 01-.791.08c-1.111-.917-1.309-1.342-1.92-2.217C56.688 22.444 55.39 23 53.007 23 50.194 23 48 21.274 48 17.819c0-2.699 1.473-4.536 3.568-5.434 1.817-.795 4.354-.936 6.294-1.155v-.43c0-.79.06-1.726-.405-2.409-.41-.613-1.191-.865-1.878-.865-1.276 0-2.415.65-2.693 1.997-.056.3-.278.594-.579.608l-3.248-.346c-.273-.061-.574-.28-.499-.697C49.31 5.178 52.863 4 56.045 4c1.628 0 3.756.43 5.041 1.655 1.629 1.51 1.473 3.526 1.473 5.72v5.181c0 1.557.65 2.24 1.262 3.082.216.299.263.66-.01.884-.682.565-1.897 1.618-2.565 2.207l-.01-.01" fill="#000"/>
            </g>
          </svg>
        </div>
        <div className="col-span-6 md:col-span-3 flex justify-center items-center">
          <svg className="w-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
            <g fillRule="nonzero" fill="none">
              <path d="M92 21c0 5.182-4.04 9-9 9s-9-3.818-9-9c0-5.218 4.04-9 9-9s9 3.782 9 9zm-3.94 0c0-3.238-2.342-5.454-5.06-5.454-2.718 0-5.06 2.216-5.06 5.454 0 3.206 2.342 5.454 5.06 5.454 2.718 0 5.06-2.252 5.06-5.454z" fill="#EA4335"/>
              <path d="M112 21c0 5.182-4.04 9-9 9s-9-3.818-9-9c0-5.214 4.04-9 9-9s9 3.782 9 9zm-3.94 0c0-3.238-2.342-5.454-5.06-5.454-2.718 0-5.06 2.216-5.06 5.454 0 3.206 2.342 5.454 5.06 5.454 2.718 0 5.06-2.252 5.06-5.454z" fill="#FBBC05"/>
              <path d="M131 12.542v16.12c0 6.63-3.862 9.338-8.428 9.338-4.298 0-6.885-2.91-7.86-5.29l3.39-1.43c.604 1.462 2.083 3.186 4.466 3.186 2.923 0 4.734-1.825 4.734-5.262v-1.291h-.136c-.872 1.088-2.551 2.04-4.67 2.04-4.434 0-8.496-3.91-8.496-8.942 0-5.068 4.062-9.011 8.496-9.011 2.115 0 3.794.951 4.67 2.008h.136v-1.462H131v-.004zm-3.422 8.469c0-3.162-2.083-5.473-4.734-5.473-2.687 0-4.938 2.311-4.938 5.473 0 3.129 2.251 5.408 4.938 5.408 2.65 0 4.734-2.28 4.734-5.408z" fill="#4285F4"/>
              <path fill="#34A853" d="M138 3v27h-4V3z"/>
              <path d="M152.684 23.966l3.141 2.045c-1.013 1.465-3.457 3.989-7.679 3.989-5.236 0-9.146-3.952-9.146-9 0-5.352 3.944-9 8.693-9 4.783 0 7.123 3.717 7.887 5.725l.42 1.023-12.32 4.983c.942 1.806 2.41 2.727 4.466 2.727 2.061 0 3.49-.99 4.538-2.492zm-9.67-3.238l8.236-3.34c-.453-1.123-1.816-1.906-3.42-1.906-2.057 0-4.92 1.773-4.816 5.246z" fill="#EA4335"/>
              <path d="M59.574 18.642v-3.825h13.23c.13.667.196 1.455.196 2.309 0 2.87-.805 6.419-3.4 8.947C67.075 28.634 63.85 30 59.578 30 51.658 30 45 23.715 45 16S51.659 2 59.578 2c4.38 0 7.502 1.675 9.846 3.858l-2.77 2.699c-1.681-1.537-3.96-2.732-7.08-2.732-5.783 0-10.306 4.54-10.306 10.175 0 5.634 4.523 10.175 10.306 10.175 3.75 0 5.887-1.468 7.255-2.801 1.11-1.081 1.84-2.626 2.128-4.736l-9.383.004z" fill="#4285F4"/>
            </g>
          </svg>
        </div>
      </div>
      {/* Logos - End */}

      {/* Coach Section */}
      <div className="w-full pt-16 lg:py-24 bg-white xl:mb-32">
        <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
          <div className="col-span-full lg:col-span-6 flex items-center">
            <div>
              <h3 className="text-lg font-bold text-tertiary-600 text-opacity-80 mb-3">Certified coach</h3>
              <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">Get unstuck and start growing.</h2>
              <p className="text-black text-opacity-60 text-lg mb-6 font-medium">I help high performing professionals and executives achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
              <a href="https://odegard.group"><button className="border border-tertiary-600 bg-tertiary-50 bg-opacity-90 px-5 py-2 text-sm font-medium rounded-full tracking-wide text-tertiary-600 transform transition hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">What is coaching?</button></a>
              <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10">
                <div className="col-span-full sm:col-span-1">
                  <div className="font-medium text-black text-opacity-90 text-sm mb-2">Get to where you want to be in your career</div>
                  <p className="text-black text-opacity-70 text-sm mb-2">Whether you’re looking to get a promotion, change jobs, change careers, do better work, or start a company, coaching is the answer.</p>
                </div>
                <div className="col-span-full sm:col-span-1">
                  <div className="font-medium text-black text-opacity-90 text-sm mb-2">Build a team that loves working for you</div>
                  <p className="text-black text-opacity-70 text-sm mb-2">Let's discover your unique leadership style and the most effective techniques for your company and team. I am your personal leadership guru.</p>
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
      <div className="hidden xl:block absolute transform xl:-skew-y-12 w-full h-160 origin-top-left bg-silk rounded-full rounded-tr-none"></div>
      <div className="relative pt-16 pb-16 xl:pt-0 xl:-mt-24 xl:mb-10 bg-silk xl:bg-transparent">
        <div className="grid grid-cols-12 gap-x-2 gap-y-4 md:gap-y-10 md:gap-x-10 max-w-screen-xl mx-auto relative z-10 px-6 lg:px-14 xl:px-6">
          <div className="col-span-full md:col-span-5 flex justify-center items-center md:justify-start md:flex-none">
            <img className="w-72 mb-10 md:mb-0 md:w-full bg-transparent shadow-medium" src="podcast.jpg" />
          </div>
          <div className="md:col-span-1"></div>
          <div className="col-span-full md:col-span-6 flex items-center">
            <div className="">
              <h3 className="text-lg font-bold text-purpz text-opacity-80 mb-3">Podcast host</h3>
              <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">Be yourself at work and outperform your peers.</h2>
              <p className="text-black text-opacity-60 text-lg mb-6 font-medium">Check out the <span className="text-black text-opacity-80 font-medium">Jered O Show</span>. Each episode we meet with company leaders or pioneering experts to uncover the unique practice of top individuals and teams.</p>
              <a href="/podcast"><button className="border border-purpz bg-purple-100 bg-opacity-90 px-5 py-2 text-sm font-medium rounded-full tracking-wide text-purpz transform transition hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Listen to the podcast</button></a>
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
      <div className="w-full pt-16 bg-white mb-8 lg:mb-24 xl:mt-40">
        <div className="grid grid-cols-12 gap-x-2 gap-y-10 md:gap-y-14 md:gap-x-10 max-w-screen-xl mx-auto px-6 lg:px-14 xl:px-6">
          <div className="col-span-full lg:col-span-6 flex items-center">
            <div>
              <h3 className="text-lg font-bold text-secondary-500 text-opacity-80 mb-3">Coming soon</h3>
              <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">Meet leaders like you.</h2>
              <p className="text-black text-opacity-60 text-lg mb-6 font-medium">Join this exclusive leadership incubator that includes virtual lectures, a peer community, and personalized coaching.</p>
              <a href="https://forms.gle/REkFDEUQkaB59zbC6"><button className="border border-secondary-500 bg-secondary-50 bg-opacity-90 px-5 py-2 text-sm font-medium rounded-full tracking-wide text-secondary-500 transform transition hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Join the waitlist</button></a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-6"></div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Manage the transition</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Have you been thrown into the deep end like most? Avoid all the mistakes first-time managers make.</p>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Hire the best</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Find the top performers who will thrive under your leadership and persuade them to join your team.</p>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Maximize performance</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Equip yourself with powerful coaching skills to turn around a struggling employee and strengthen the high achievers.</p>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-3">
            <div className="font-medium text-black text-opacity-90 text-sm mb-2">Scale your influence</div>
            <p className="text-black text-opacity-70 text-sm mb-2">Learn to think like an executive. Build processes and a culture that attracts, retains, and enables world-class talent.</p>
          </div>
        </div>
      </div>
      {/* Training Section */}

      <div className="max-w-screen-xl mx-auto flex text-xs text-gray-400 mb-6 pt-6 border-t justify-between">
        <p className="pl-4 xl:pl-0">&copy; Jered Odegard. All rights reserved.</p>
        <div className="space-x-8 pr-4 xl:pr-0">
          <a className="text-gray-800" href="https://www.linkedin.com/in/jered-odegard/">LinkedIn</a>
          <a className="text-gray-800" href="mailto:hello@jeredodegard.com">Email</a>
        </div>
      </div>
    </Container>
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