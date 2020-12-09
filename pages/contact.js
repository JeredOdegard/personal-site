export default function Contact() {
  return (
    <div className="pt-32">
      <main className="mb-32">
        <div className="absolute top-0 transform -skew-y-6 w-full h-full origin-top-left bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-300">
          <span className="absolute top-0 left-0 w-96 h-64 bg-gradient-to-br from-green-200 to-purple-500"></span>
          <span className="absolute top-0 left-96 w-96 h-64 bg-gradient-to-br from-blue-400 to-purple-500"></span>
          <span className="absolute top-0 left-1/3 w-96 h-64 bg-gradient-to-br from-blue-400 to-purple-500"></span>
          <span className="absolute top-0 right-0 w-96 h-64 bg-gradient-to-br from-blue-400 to-purple-500"></span>
          <span className="absolute bottom-0 right-0 w-96 h-64 bg-gradient-to-br from-purple-500 to-green-200"></span>
          <span className="absolute bottom-64 -right-32 w-96 h-64 bg-gradient-to-br from-blue-500 to-purple-200"></span>
          <span className="absolute bottom-0 left-0 w-96 h-64 bg-gradient-to-br from-blue-400 to-purple-500"></span>
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center mt-10">
          <h1 className="text-white text-7xl font-black mb-4">Leadership fascinates me.</h1>
          <p className="text-3xl text-white text-opacity-75 mb-10">My purpose is to help create more authentic and capable leaders.</p>
          <button className="bg-white bg-opacity-95 px-6 py-3 uppercase text-sm font-medium rounded tracking-wide text-gray-900 shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">Read my story</button>
        </div>
      </main>
      <div className="grid grid-cols-12 gap-x-10 max-w-screen-xl mx-auto relative z-10 pb-24">
        <div className="col-span-6">
          <div className="bg-gradient-to-br from-green-200 to-blue-500 w-full rounded-xl shadow-medium p-16">
            <h3 className="text-white text-5xl font-black leading-none mb-6">Fast-track your growth.</h3>
            <p className="text-white text-opacity-80 text-2xl text-shadow mb-8">I help high performing professionals and executives at companies like <span className="text-white font-extrabold">Amazon</span>, <span className="text-white font-extrabold">Facebook</span>, and <span className="text-white font-extrabold">Microsoft</span> achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
            <button className="bg-white bg-opacity-95 px-6 py-3 uppercase text-sm font-medium rounded tracking-wide text-blue-900 shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">What is coaching?</button>
          </div>
        </div>
        <div className="col-span-6">
          <div className="bg-white bg-opacity-30 w-full rounded-xl shadow-medium p-16">
            <h3 className="text-white text-5xl font-black leading-none mb-6">Experts say.</h3>
            <p className="text-white text-opacity-80 text-2xl text-shadow mb-8">I host a podcast called the Jered O Show. Each episode I meet with researchers and company leaders to uncover how to become world-class.</p>
            <button className="bg-white bg-opacity-95 px-6 py-3 uppercase text-sm font-medium rounded tracking-wide text-black shadow transform transition hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-100 hover:scale-105">See the podcast</button>
          </div>
        </div>
      </div>
    </div>
  )
}