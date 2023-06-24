import Image from 'next/image'
import CVimg from './CVimg.jpg'
export default function page() {
	return (
		<div>
			<Image src={CVimg} alt='Serhii Kozin CV' />
			<a href='/SerhiiWebDevCV.pdf' download>
				<button className='block my-3 m-auto w-1/5 p-3 bg-slate-700 hover:ease-linear hover:duration-500 hover:bg-slate-500 hover:rounded-md'>
					Download CV
				</button>
			</a>
		</div>
	)
}
