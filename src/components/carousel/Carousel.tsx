'use client'
import { motion } from 'framer-motion'
// import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { imagesArray } from './images'
const Carousel = () => {
	return (
		<motion.div>
			<Swiper
				pagination={{
					type: 'bullets',
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
			>
				{imagesArray.map((el, index) => (
					<SwiperSlide key={el.id}>
						<Image src={el.img} alt={el.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</motion.div>
	)
}

export default Carousel
