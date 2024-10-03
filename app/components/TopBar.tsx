import Link from 'next/link'
import React from 'react'

export default function TopBar() {
	return (
		<nav className="container bg-primary text-primary-foreground p-4">
			<div className="mx-auto flex justify-end">
				<Link
					href="/donate-with-elements"
					className="text-sm font-medium hover:underline"
				>
					Donate
				</Link>
			</div>
		</nav>
	)
}
