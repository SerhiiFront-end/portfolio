'use client'
import React from "react";
import { MotionProps, motion } from 'framer-motion'
interface MyMotionDivProps extends MotionProps {
	className?: string
}
export default function animation({
	children,
	className,
	tag = 'div',
	isOneTime = true,
}: {
	children: React.ReactNode
	className?: string
	tag?: keyof typeof motion
	isOneTime?: boolean
}) {
	const Tag = motion[tag] as React.ElementType<MyMotionDivProps>
	// const isOneTimeAnim
	return (
		<Tag
			className={className}
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: isOneTime, amount: 0.8 }}
			variants={{
				offscreen: {
					y: 50,
					opacity: 0,
				},
				onscreen: {
					y: 0,
					opacity: 1,
					transition: {
						type: 'spring',
						bounce: 0.4,
						duration: 0.8,
					},
				},
			}}
		>
			{children}
		</Tag>
	)
}
