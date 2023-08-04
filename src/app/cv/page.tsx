import Image from 'next/image'
import Anim from '../../../components/animscroll/animation'
import Template from '../../../components/template/template'
import CVimg from './CVimg.jpg'
export default function page() {
	return (
		<div>
			<Template loading={false} left={false}>
				<Image src={CVimg} alt='Serhii Kozin CV' priority />
				<Anim className='mt-[5vh]'>
					<a href='/SerhiiWebDevCV.pdf' download>
						<button className='w-1/2 block my-3 m-auto md:w-1/5 p-3 bg-slate-700 hover:ease-linear hover:duration-500 hover:bg-slate-500 hover:rounded-md'>
							Download CV
						</button>
					</a>
				</Anim>
			</Template>
		</div>
	)
}
