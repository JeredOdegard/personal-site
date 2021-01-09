function Headline({ children }) {
  return (
    <h1 className="text-black text-5xl md:text-8xl md:max-w-screen-sm font-bold mb-4 text-opacity-90 mt-10">{children}</h1>
  )
}

function Subtitle({ children }) {
  return (
    <p className="text-2xl text-black text-opacity-60 mb-10">{children}</p>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl text-black text-opacity-90 font-bold mb-6">{children}</h2>
  )
}

function Paragraph({ children }) {
  return (
    <p className="text-xl text-black text-opacity-75 mb-8 leading-relaxed">{children}</p>
  )
}

export { Headline, Subtitle, SectionTitle, Paragraph}