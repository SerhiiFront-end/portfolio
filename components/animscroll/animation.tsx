'use client'
import { motion, Variants } from 'framer-motion'

import React from 'react'

const cardVariants: Variants = {
	offscreen: {
		y: 50,
	},
	onscreen: {
		y: 0,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
}
export default function animation({
	className,
	children,
	tag,
}: {
	className?: string
	children: React.ReactNode
	tag: keyof JSX.IntrinsicElements
}) {
	const Tag = motion[tag] || tag
	return (
		<Tag
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.8 }}
			variants={cardVariants}
			className={className}
		>
			{children}
		</Tag>
	)
}
