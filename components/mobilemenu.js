export default function MobileMenu({ click }) {
  
  let toggleNav = click

  return (
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
        <a className="block p-4 rounded hover:bg-gray-200 hover:text-gray-800" href="/contact">Contact</a>
      </nav>
    </div>
  )
}