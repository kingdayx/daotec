"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function ServicesMobile({
  title,
  img,
  description,
  description1,
  description2,
  description3,
  skills,
  styles,
}) {
  return (
    <div>
      <div className={styles}> {title} </div>
    </div>
  );
}
