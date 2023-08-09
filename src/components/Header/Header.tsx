'use client'

import Link from 'next/link'
import HeaderButtonMenu from './HeaderButtonMenu'
export default function () {
	return (
		<header className='relative text-slate-300 md:py-5 md:mb-[10vh]'>
			<div className='py-4 md:flex md:justify-between md:items-center md:py-0 px-[10vw]'>
				<Link
					href={'/'}
					className={
						'font-bold text-xl md:hover:text-gray-500 hover:ease-in hover:duration-200'
					}
				>
					Main
				</Link>
				<nav>
					<HeaderButtonMenu />
				</nav>
			</div>
		</header>
	)
}
