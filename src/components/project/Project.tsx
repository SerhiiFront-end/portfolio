import Anim from '@/components/animscroll/Anim'
import { Button } from '@/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({
	index,
	img,
	name,
	description,
	link,
	newPage,
}: {
	index: number
	img: string
	name: string
	description: string
	link: string
	newPage: boolean
}) {
	return (
		<div
			className={`md:h-[300px] m-4 md:m-0 md:flex items-center border-t md:border-t-0 py-5 px-3 md:mt-[10vh]  ${
				index % 2 === 0 ? '' : 'flex-row-reverse'
			} `}
		>
			<div className=''>
				<Image src={img} alt={name} width={1200} height={800} />
			</div>
			<Anim
				className={`md:text-sm text-xs flex flex-col md:w-3/5 p-3 bg-gray-900 z-10 ${
					index % 2 === 0 ? 'pl-6' : 'pr-6'
				} m-auto w-full`}
			>
				<h1 className='font-bold text-base md:text-lg text-center text-cyan-400'>
					{name}
				</h1>
				<p className='mt-5'> {description}</p>
				<Link href={link} target={newPage ? '_blank' : ''}>
					<Button className='block m-auto mt-5'>Visit</Button>
				</Link>
			</Anim>
		</div>
	)
}
