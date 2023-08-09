'use client'

import Link from 'next/link'
import HeaderButtonMenu from './HeaderButtonMenu'

const Links = [
	{ id: 0, label: 'Main', path: '/', targetSegment: null },
	{
		id: 1,
		label: 'Projects',
		path: '/projects',
		targetSegment: 'projects',
	},
	{ id: 2, label: 'Skills', path: '/skills', targetSegment: 'skills' },
	{ id: 3, label: 'CV', path: '/cv', targetSegment: 'cv' },
]
export default function () {
	return (
		<header className='relative text-slate-300 md:py-2'>
			<div className='py-4 md:flex md:justify-between md:items-center md:py-0 px-[10vw]'>
				<Link
					href={'/'}
					className={
						'font-bold text-xl md:hover:text-gray-500 hover:ease-in hover:duration-200'
					}
				>
					{/* className='px-3 text-center  font-bold' */}
					Main
				</Link>
				<nav>
					<HeaderButtonMenu />
				</nav>
			</div>
		</header>
	)
}
