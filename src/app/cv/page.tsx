import Image from 'next/image'
import Anim from '../../../components/animscroll/Anim'
import Template from '../../../components/template/template'
import CVimg from './CVimg.png'
export default function page() {
	return (
		<div>
			<Template loading={false} left={false}>
				<Image className='m-auto w-[70%]' src={CVimg} alt='CV' />
				<Anim isOneTime={false} tag='div'>
					<a href='/CV_Serhii_Kozin_UI_UX_dev.pdf' download>
						<button className='w-1/2 block my-3 m-auto md:w-1/5 p-3 bg-slate-700 hover:ease-linear hover:duration-500 hover:bg-slate-500 hover:rounded-md'>
							Download CV
						</button>
					</a>
				</Anim>
			</Template>
		</div>
	)
}
