import Link from "next/link"

export default function NavItem({ href, isActive, children }) {
  const activeClasses = "text-gray-900 font-bold border-b-4 border-purple-600 -mb-2"
  const nonActiveClasses = "hover:text-gray-900 px-2"
  const baseClasses = "px-2 text-sm md:text-base"

	return (
		<Link href={href}>
			<a className={`${baseClasses} ${ isActive ? activeClasses : nonActiveClasses}`}>
				{children}
			</a>
		</Link>
	)
}