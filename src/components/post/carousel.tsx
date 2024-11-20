"use client";
import { Box, IconButton } from "@mui/material";
import { ImageCarousel } from "./ImageCarousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Carousel() {
	function handledClickNext() {
		const container = document.getElementById("#container-carousel");
		if (container) {
			container.scrollLeft += 100;
		}
	}

	function handledClickPrev() {
		const container = document.getElementById("#container-carousel");
		if (container) {
			container.scrollLeft -= 100;
		}
	}

	return (
		<>
			<Box sx={{ position: "relative" }} component="div">
				<IconButton onClick={handledClickPrev} size="small" sx={{ "position": "absolute", "top": "50%", "left": "1%", "zIndex": 1, "transform": "translate(0, -80%)", "backgroundColor": "#38393A ", "opacity": "0.8", "&:hover": { backgroundColor: "#1D1E1E" } }}>
					<ArrowBackIcon />
				</IconButton>
				<Box id="container-carousel" className="grid grid-flow-col gap-[0.5rem] remove-scrollbar overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-auto">
					{[...Array(10)].map((_, i) => (
						<ImageCarousel key={i}></ImageCarousel>
					))}
				</Box>

				<IconButton onClick={handledClickNext} size="small" sx={{ "position": "absolute", "top": "50%", "left": "100%", "zIndex": 1, "transform": "translate(-115%, -80%)", "backgroundColor": "#38393A ", "opacity": "0.8", "&:hover": { backgroundColor: "#1D1E1E" } }}>
					<ArrowForwardIcon />
				</IconButton>
			</Box>
		</>
	);
}
