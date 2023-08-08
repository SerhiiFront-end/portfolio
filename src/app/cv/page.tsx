import Anim from '@/components/animscroll/Anim'
import Template from '@/components/template/template'
import Image from 'next/image'
import CVimg from './CVimg.png'
import Button from "@/ui/Button";
import React from "react";

export default function page() {
    return (
        <Template>
            <Image className='m-auto w-[70%]' src={CVimg} alt='CV'/>
            <Anim isOneTime={false}>
				<a href='/CV_Serhii_Kozin_UI_UX_dev.pdf' download>
					<Button>Download CV</Button>
				</a>
			</Anim>
		</Template>
    )
}
