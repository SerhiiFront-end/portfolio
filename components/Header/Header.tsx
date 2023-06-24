'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function () {
	const Links = [
		{ id: 0, label: 'Home', path: '/', targetSegment: null },
		{
			id: 1,
			label: 'Projects',
			path: '/projects',
			targetSegment: 'projects',
		},
		{ id: 2, label: 'Skills', path: '/skills', targetSegment: 'skills' },
		{ id: 3, label: 'CV', path: '/cv', targetSegment: 'cv' },
	]
	const activeSegment = useSelectedLayoutSegment()
	return (
		<header>
			<nav>
				<ul>
					{Links.map(el => {
						return (
							<Link key={el.id} href={el.path}>
								<li
									className={
										activeSegment === el.targetSegment ? 'activeStyle' : ''
									}
								>
									{el.label}
								</li>
							</Link>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}