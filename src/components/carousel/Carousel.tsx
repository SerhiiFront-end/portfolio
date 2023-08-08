"use client"
import {Swiper , SwiperSlide} from 'swiper/react';
import {Navigation , Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import {imagesArray} from "./images";

const Carousel = () => {
    return (
        <Swiper
            pagination={{
                type: 'fraction' ,
            }}
            navigation={true}
            modules={[Pagination , Navigation]}
            className='my-[20vh]'
        >
            {imagesArray.map((el , index) => (
                <SwiperSlide
                    key={index}
                >
                    <Image
                        sizes="100vw"
                        src={el.img}
                        alt={el.alt}
                    />
            </SwiperSlide >))}
      </Swiper >
    );
};

export default Carousel;