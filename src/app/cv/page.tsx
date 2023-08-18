import Template from '@/components/template/template'
import { Button } from '@/ui/Button'
import Image from 'next/image'
import CVimg from '/public/CVimg.png'

export default function page() {
	return (
		<Template>
			<Image className='m-auto w-[70%]' src={CVimg} alt='CV' />

			<Button className={'block m-auto my-3'}>
				<a href='/CV_Serhii_Kozin_UI_UX_dev.pdf' download>
					Download CV
				</a>
			</Button>
		</Template>
	)
}
