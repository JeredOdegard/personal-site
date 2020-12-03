export default function Typography() {
  return (
    <div></div>
  )
}

export function Headline({ children }) {
  return (
    <h1 className="text-4xl font-black mb-8 mt-12 text-gray-900">{children}</h1>
  )
}

export function Subtitle({ children }) {
  return (
    <h2 className="text-2xl font-extrabold my-2 text-gray-600">{children}</h2>
  )
}

export function SectionTitle({ children }) {
  return (
    <h3 className="text-lg font-bold my-2 text-gray-400">{children}</h3>
  )
}