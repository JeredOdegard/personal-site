function Headline({ children }) {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-extrabold text-gray-900 tracking-tight mt-8 mb-6 font-serif">{children}</h1>
  )
}

function Subtitle({ children }) {
  return (
    <h2 className="text-2xl font-extrabold my-2 text-gray-600">{children}</h2>
  )
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-lg font-bold my-2 text-gray-400">{children}</h3>
  )
}

export { Headline, Subtitle, SectionTitle }