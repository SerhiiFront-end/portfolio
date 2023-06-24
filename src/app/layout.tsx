import Image from 'next/image'
import Link from 'next/link'
import gitlogo from './gitlogo.png'
import './globals.scss'
import inlogo from './inlogo.png'
import instLogo from './instlogo.png'
export const metadata = {
	title: 'Code Canvas',
	description: 'Generated',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<header>
					<nav>
						<ul>
							<Link href={'/'}>
								<li>Main</li>
							</Link>
							<Link href={'projects'}>
								<li>Projects</li>
							</Link>
							<Link href={'skills'}>
								<li>Skills</li>
							</Link>
							<Link href={'cv'}>
								<li>CV</li>
							</Link>
						</ul>
					</nav>
				</header>
				{children}
				<footer>
					<div>
						<a href={'https://www.instagram.com/el_skozin/'}>
							<Image
								src={instLogo}
								alt='Instagram Logo'
								width={30}
								height={30}
							/>
						</a>
						<a href={'https://github.com/SerhiiFront-end'}>
							<Image src={gitlogo} alt='GitHub logo' width={30} height={30} />
						</a>
						<a href={'https://www.linkedin.com/in/serhii-kozin-76060026a/'}>
							<Image src={inlogo} alt='GitHub logo' width={30} height={30} />
						</a>
					</div>
					<div>© Serhii Kozin, 2023 Portfolio</div>
				</footer>
			</body>
		</html>
	)
}
