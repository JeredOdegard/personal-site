import Link from "next/link"

export default function NavItem({ href, isActive, children }) {
	return (
		<Link href={href}>
			<a className={isActive ? 'text-gray-900 font-extrabold border-b-4 border-indigo-600 -mb-2 px-2' : 'hover:text-indigo-600 px-2'}>
				{children}
			</a>
		</Link>
	)
}