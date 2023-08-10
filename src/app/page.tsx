'use client'
import paragraphs from '@/app/(root)/parahraphs.json'
import Anim from '@/components/animscroll/Anim'
import Carousel from '@/components/carousel/Carousel'
import Template from '@/components/template/template'
import Lenis from '@studio-freight/lenis'

import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { useEffect } from 'react'
import myStack from './(root)/myStack.jpg'

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
})

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	return (
		<main className={`${roboto.className} p-2 md:text-sm text-xs`}>
			<div className='flex items-center justify-center text-center py-5'>
				<h1 className='font-bold md:text-2xl text-xs italic text-cyan-400 m-auto'>
					<Template>
						Welcome to my
						<br /> UI/UX Developer <br />
						Portfolio!
					</Template>
				</h1>
				<Template left={true}>
					<Image
						src={myStack}
						alt='My stack'
						className='max-w-full h-auto ml-5'
					/>
				</Template>
			</div>
			<Template left={true}>
				<Carousel />
				{paragraphs.map((el, index) => {
					return (
						<Anim tag='p' key={index} className='m-[5vh]'>
							{el}
						</Anim>
					)
				})}
			</Template>
		</main>
	)
}
