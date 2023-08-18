import { Button } from '@/ui/Button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='text-center m-auto'>
			<h1 className='font-bold mt-[10vh]'>This page is not Found</h1>
			<Link href={'/'}>
				<Button className='mt-[30vh]'>Return Home</Button>
			</Link>
		</div>
	)
}
