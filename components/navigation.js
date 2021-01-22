import Link from "next/link"
import { useRouter } from "next/router"
import MobileMenu from "components/mobilemenu"

export default function Navigation({ children }) {
  const currentPath = useRouter().pathname
  const homeUrl = "/"
  const coachingUrl = "/coaching"
  const podcastUrl = "/podcast"
  const aboutUrl = "/about"

  const activeLink = "text-black"
  const inactiveLink = "text-black text-opacity-50 hover:text-black"

  return (
    <nav>
      <MobileMenu click={toggleNav} />

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
              <header className="hidden md:flex space-x-8 ml-24 text-base lg:text-lg font-bold">
                <Link href="/"><a className={ currentPath === homeUrl ? activeLink : inactiveLink }>Home</a></Link>
                <Link href="/coaching"><a className={ currentPath === coachingUrl ? activeLink : inactiveLink }>Coaching</a></Link>
                <Link href="/podcast"><a className={ currentPath === podcastUrl ? activeLink : inactiveLink }>Podcast</a></Link>
                <Link href="/about"><a className={ currentPath === aboutUrl ? activeLink : inactiveLink }>About</a></Link>
              </header>
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
    </nav>
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