'use client'
import { MotionProps, Variants, motion } from 'framer-motion'
interface MyMotionDivProps extends MotionProps {
	className?: string
}
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
	children,
	className,
	tag,
}: {
	children: React.ReactNode
	className?: string
	tag: keyof typeof motion
}) {
	const Tag = motion[tag] as React.ElementType<MyMotionDivProps>
	console.log(className)

	return (
		<Tag
			className={className}
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.8 }}
			variants={cardVariants}
		>
			{children}
		</Tag>
	)
}
