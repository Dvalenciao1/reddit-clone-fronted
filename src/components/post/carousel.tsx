import { Box, IconButton } from "@mui/material";
import { ImageCarousel } from "./ImageCarousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Carousel() {
	return (
		<>
			<Box sx={{ position: "relative" }} className="grid grid-flow-col gap-[0.5rem] remove-scrollbar overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-auto">
				[
				<IconButton size="small" sx={{ "position": "absolute", "top": "50%", "left": "3.5%", "zIndex": 1, "transform": "translate(0, -80%)", "backgroundColor": "#38393A ", "opacity": "0.8", "&:hover": { backgroundColor: "#1D1E1E" } }}>
					<ArrowBackIcon />
				</IconButton>
				]
				{[...Array(10)].map((_, i) => (
					<ImageCarousel key={i}></ImageCarousel>
				))}
				<IconButton size="small" sx={{ "position": "absolute", "top": "50%", "left": "100%", "zIndex": 1, "transform": "translate(-40%, -80%)", "backgroundColor": "#38393A ", "opacity": "0.8", "&:hover": { backgroundColor: "#1D1E1E" } }}>
					<ArrowForwardIcon />
				</IconButton>
			</Box>
		</>
	);
}
