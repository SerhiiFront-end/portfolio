import Template from '@/components/template/template'
import {Roboto} from 'next/font/google'
import Image from 'next/image'
import paragraphs from '@/app/(root)/parahraphs.json'
import myStack from './(root)/myStack.jpg'
import Carousel from "@/components/carousel/Carousel";
import React from "react";
import Anim from "@/components/animscroll/Anim"

const roboto = Roboto({
    weight:  '400' ,
    subsets: ['latin'] ,
})

export default function Home() {
    return (
        <main className={roboto.className}>
			<div className='flex justify-around'>
				<h1 className='font-bold md:text-2xl text-xs italic float-left m-auto text-center text-cyan-400'>
					<Template left={true}>
						Welcome to my
						<br /> UI/UX Developer <br />
						Portfolio!
					</Template >
				</h1 >
				<Template >
					<Image
                        src={myStack}
                        alt='My stack'
                        className='sm:max-w-xl max-w-[230px] lg:max-w-2xl'
                    />
				</Template >
			</div >
			<Carousel/>
			<Template left={true}>
				{paragraphs.map(el => {return (<Anim tag='p'>{el}</Anim >)})}
			</Template >
</main >
    )
}
