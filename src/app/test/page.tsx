'use client'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
export default function page() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return <div>page</div>
}
