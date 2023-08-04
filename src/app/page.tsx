'use client'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Anim from '../../components/animscroll/Anim'
import Template from '../../components/template/template'
import myStack from './myStack.jpg'
const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
})

export default function Home() {
	return (
		<main className={roboto.className}>
			<div className='flex justify-around'>
				<h1 className='font-bold md:text-2xl text-xs italic float-left m-auto text-center text-cyan-400'>
					<Template loading={false} left={true}>
						Welcome to my
						<br /> UI/UX Developer <br />
						Portfolio!
					</Template>
				</h1>
				<Template loading={false} left={false}>
					<Image
						src={myStack}
						alt='My stack'
						className='sm:max-w-xl max-w-[230px] lg:max-w-2xl'
					/>
				</Template>
			</div>
			<Template loading={false} left={true}>
				<Anim tag='p'>
					Hello, I'm Serhii Kozin, a passionate front-end developer dedicated to
					creating stunning and user-friendly websites. With a keen eye for
					design and a strong foundation in coding, I strive to deliver
					exceptional digital experiences that captivate users and drive
					business growth.
				</Anim>
				<Anim tag='p'>
					As a front-end developer, I specialize in turning creative concepts
					into functional and responsive websites. I work with HTML, CSS, and
					JavaScript to craft seamless user interfaces that are visually
					appealing and optimized for performance. Whether it's building a brand
					new website from scratch or enhancing an existing one, I love bringing
					ideas to life through clean, elegant code.
				</Anim>
				<Anim tag='p'>
					In my portfolio, you'll find a showcase of my recent projects,
					demonstrating my diverse range of skills and expertise. From simple
					and intuitive landing pages to complex web applications, each project
					reflects my commitment to creating impactful solutions that meet
					client requirements and exceed expectations.
				</Anim>
				<Anim tag='p'>
					Collaboration is at the core of my development process. I thrive on
					working closely with clients, designers, and other developers to
					ensure seamless integration of design and functionality. By fostering
					effective communication and employing agile methodologies, I ensure
					that projects are delivered on time and with the highest level of
					quality.
				</Anim>
				<Anim tag='p'>
					Continuous learning is vital to my growth as a front-end developer. I
					stay up-to-date with the latest industry trends and technologies,
					allowing me to incorporate cutting-edge techniques into my work. This
					dedication to learning empowers me to deliver innovative solutions
					that push the boundaries of web development.
				</Anim>
				<Anim tag='p'>
					I'm always excited to take on new challenges and contribute my skills
					to meaningful projects. Whether you're a business owner looking to
					enhance your online presence or a fellow developer seeking
					collaboration, I would love to hear from you. Feel free to explore my
					portfolio and get in touch with me to discuss how we can bring your
					digital vision to life.
				</Anim>
				<Anim tag='p'>
					Thank you for visiting, and I look forward to connecting with you!
				</Anim>
				<Anim tag='p'>Serhii Kozin</Anim>
			</Template>
		</main>
	)
}
