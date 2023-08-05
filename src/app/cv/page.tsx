// import Image from 'next/image'
// import CVimg from './CVimg.jpg'
import Anim from '../../../components/animscroll/Anim'
import CV from '../../../components/myCV/CV'
import Template from '../../../components/template/template'
export default function page() {
	return (
		<div>
			<Anim isOneTime={false} tag='div'>
				<CV />
			</Anim>
			<Template loading={false} left={false}>
				<a href='/CV_Serhii_Kozin_UI_UX_dev.docx' download>
					<button className='w-1/2 block my-3 m-auto md:w-1/5 p-3 bg-slate-700 hover:ease-linear hover:duration-500 hover:bg-slate-500 hover:rounded-md'>
						Download CV
					</button>
				</a>
			</Template>
		</div>
	)
}
