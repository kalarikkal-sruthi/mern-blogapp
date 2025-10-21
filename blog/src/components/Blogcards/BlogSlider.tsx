"use client";
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BlogCard from "./BlogCard";

function BlogSlider() {
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
  const blogs = [
    { name: "Category 1", path: "#", bgcolor:"black" },
    { name: "Category 2", path: "#", bgcolor:"black" },
    { name: "Category 3", path: "#", bgcolor:"black" },
    { name: "Category 4", path: "#", bgcolor:"black" },
    { name: "Category 5", path: "#", bgcolor:"black" },
  ];
  return (
    <main>
      <h1>Latest Blogs</h1>
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
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default BlogSlider;
