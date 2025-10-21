"use client";
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CategoriesCard from "./CategoriesCard";

function CategoriesSlider() {
  function createHex() {
    let hexCode1 = "";
    const hexValues1 = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      hexCode1 += hexValues1.charAt(
        Math.floor(Math.random() * hexValues1.length)
      );
    }
    return hexCode1;
  }
  function generate() {
    const deg = Math.floor(Math.random() * 360);
    const gradient =
      "linear-gradient(" +
      deg +
      "deg, #" +
      createHex() +
      ", #" +
      createHex() +
      ")";
    return gradient;
  }
  const categories = [
    { name: "Category 1", path: "#", bgcolor: generate() },
    { name: "Category 2", path: "#", bgcolor: generate() },
    { name: "Category 3", path: "#", bgcolor: generate() },
    { name: "Category 4", path: "#", bgcolor: generate() },
    { name: "Category 5", path: "#", bgcolor: generate() },
  ];
  return (
    <main>
      <h1>Categories</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 10 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoriesCard {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default CategoriesSlider;
