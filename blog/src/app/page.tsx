import BlogSlider from "@/components/Blogcards/BlogSlider";
import CategoriesSlider from "@/components/Categories/CategoriesSlider";
import HomeSlider from "@/components/Homeslider/HomeSlider";
import Navabar from "@/components/Navbar/Navabar";
import React from "react";

function page() {
  return (
    <main>
      <Navabar />
      <HomeSlider />
      <CategoriesSlider />
      <BlogSlider />
   
    </main>
  );
}

export default page;
