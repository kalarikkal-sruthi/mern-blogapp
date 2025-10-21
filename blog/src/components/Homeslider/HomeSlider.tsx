"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import banner from "@/assets/banner.jpeg";
const width = window.innerWidth;
const height = window.innerHeight;

function HomeSlider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        {" "}
        <Image src={banner} alt="fff" width={width} height={height / 2} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Image src={banner} alt="fff" width={width} height={height / 2} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Image src={banner} alt="fff" width={width} height={height / 2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner} alt="fff" width={width} height={height / 2} />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSlider;
