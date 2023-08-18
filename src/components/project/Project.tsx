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
		<Link href={link} target={newPage ? '_blank' : ''}>
			<div
				className={`m-4 md:m-0 md:flex items-center py-5 px-3 border md:border-2 border-black hover:bg-stone-700 md:mt-[10vh] hover:duration-500 hover:ease-linear ${
					index % 2 === 0 ? '' : 'flex-row-reverse'
				} `}
			>
				<div>
					<Image src={img} alt={name} width={1200} height={800} />
				</div>
				<Anim className='md:text-sm text-xs flex flex-col md:w-3/5 p-3 m-auto w-full'>
					<h1 className='font-bold text-base md:text-lg text-center text-cyan-400'>
						{name}
					</h1>
					<p className='mt-5'> {description}</p>
					<Button className='block m-auto mt-5'>Visit</Button>
				</Anim>
			</div>
		</Link>
	)
}
