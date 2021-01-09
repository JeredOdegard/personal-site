export default function Container({ children }) {
  return (
    <div id="main" className="antialiased">
      {children}
    </div>
  )
}