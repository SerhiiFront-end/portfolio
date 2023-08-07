'use client'

import { motion } from 'framer-motion'

export default function Template({
	children,
	loading = false,
	left = false,
}: {
	children: React.ReactNode
	loading?: boolean
	left?: boolean
}) {
	const value = left ? -300 : 300
	return (
		<>
			<motion.div
				style={{ height: '100%' }}
				initial={{ x: value, opacity: 0 }}
				animate={{
					x: loading ? value : 0,
					opacity: loading ? 0 : 1,
				}}
				transition={{
					type: 'spring',
					duration: 1.5,
				}}
			>
				{children}
			</motion.div>
		</>
	)
}
