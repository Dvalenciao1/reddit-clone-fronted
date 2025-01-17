"use client";
import { Box, IconButton } from "@mui/material";
import { ImageCarousel } from "./ImageCarousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Carousel() {
	return (
		<>
			<Swiper navigation={true} modules={[Navigation]} spaceBetween={70} slidesPerView={4}>
				{[...Array(10)].map((_, i) => (
					<SwiperSlide key={i}>
						<ImageCarousel></ImageCarousel>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
