import Image from 'next/image'
import gitlogo from './gitlogo.png'
import inlogo from './inlogo.png'
import instLogo from './instlogo.png'
export default function Footer() {
	return (
		<footer className='flex justify-between bg-slate-950 p-[3vh] mt-[8vh] text-xs items-center'>
			<div className='flex justify-around text-[9px] md:text-sm'>
				<a href={'https://www.instagram.com/el_skozin/'} className='ml-[3vw]'>
					<Image src={instLogo} alt='Instagram Logo' width={30} height={30} />
				</a>
				<a href={'https://github.com/SerhiiFront-end'} className='ml-[3vw]'>
					<Image src={gitlogo} alt='GitHub logo' width={30} height={30} />
				</a>
				<a
					href={'https://www.linkedin.com/in/serhii-kozin-76060026a/'}
					className='ml-[3vw]'
				>
					<Image src={inlogo} alt='GitHub logo' width={30} height={30} />
				</a>
			</div>
			<div className='text-right'>
				<p>© Serhii Kozin, 2023 Portfolio</p>
				<a href='mailto:aorl9048@gmail.com' className='text-blue-500'>
					aorl9048@gmail.com
				</a>
			</div>
		</footer>
	)
}
