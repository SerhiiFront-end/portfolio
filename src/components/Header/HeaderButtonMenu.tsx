'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './header.module.css'
const Links = [
	{
		id: 1,
		label: 'Projects',
		path: '/projects',
		targetSegment: 'projects',
	},
	{ id: 2, label: 'Skills', path: '/skills', targetSegment: 'skills' },
	{ id: 3, label: 'CV', path: '/cv', targetSegment: 'cv' },
]
const HeaderButton = () => {
	const [isNavActive, setIsNavActive] = useState(false)
	const activeSegment = useSelectedLayoutSegment()
	useEffect(() => {
		if (isNavActive === true) {
			setIsNavActive(false)
		}
	}, [activeSegment])

	return (
		<>
			<button
				className={styles.nav__toggle}
				aria-expanded={isNavActive ? 'true' : 'false'}
				type={'button'}
				onClick={() => setIsNavActive(!isNavActive)}
			>
				{isNavActive ? 'Close' : 'Menu'}
			</button>
			<ul
				className={styles.nav__wrapper}
				style={
					isNavActive
						? {
								opacity: '1',
								visibility: 'visible',
								transform: 'translateY(-10px)',
						  }
						: {}
				}
			>
				{Links.map(el => {
					return (
						<Link
							key={el.id}
							href={el.path}
							className='px-3 text-center md:hover:text-gray-700 hover:ease-in hover:duration-200 font-bold'
						>
							<li
								className={
									activeSegment === el.targetSegment
										? 'bg-slate-500 px-2'
										: 'px-2'
								}
							>
								{el.label}
							</li>
						</Link>
					)
				})}
			</ul>
		</>
	)
}

export default HeaderButton
