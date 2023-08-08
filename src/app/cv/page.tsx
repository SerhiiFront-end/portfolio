import Template from '@/components/template/template'
import Image from 'next/image'
import CVimg from './CVimg.png'
import {Button} from "@/ui/Button";
import React from "react";

export default function page() {
    return (
        <Template >
            <Image
                className='m-auto w-[70%]'
                src={CVimg}
                alt='CV'
            />

					<Button className={"block m-auto my-3"}>
                        <a
                            href='/CV_Serhii_Kozin_UI_UX_dev.pdf'
                            download
                        >Download CV
                        </a >
                    </Button >

		</Template >
    )
}
