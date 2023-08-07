import Image from 'next/image'
import gitlogo from './gitlogo.png'
import inlogo from './inlogo.png'
import instLogo from './instlogo.png'
export default function Footer() {
	return (
		<footer>
			<div className='footerdiv'>
				<a href={'https://www.instagram.com/el_skozin/'}>
					<Image src={instLogo} alt='Instagram Logo' width={30} height={30} />
				</a>
				<a href={'https://github.com/SerhiiFront-end'}>
					<Image src={gitlogo} alt='GitHub logo' width={30} height={30} />
				</a>
				<a href={'https://www.linkedin.com/in/serhii-kozin-76060026a/'}>
					<Image src={inlogo} alt='GitHub logo' width={30} height={30} />
				</a>
			</div>
			<div className='rightDiv'>
				<p>© Serhii Kozin, 2023 Portfolio</p>
				<a href='mailto:aorl9048@gmail.com' className='footerlink'>
					aorl9048@gmail.com
				</a>
			</div>
		</footer>
	)
}
