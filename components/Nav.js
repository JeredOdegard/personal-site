export default function Nav({ children }) {
	return (
		<nav className="hidden sm:flex justify-between space-x-6 text-sm text-gray-500 font-medium">
			{children}
		</nav>
	)
}