import Carousel from "@/components/post/carousel";
import Popular from "@/components/post/Popular";
import FeedPost from "@/components/post/Post";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<>
			<Box sx={{ flexGrow: 1, height: "100vh", margin: "12px 12px" }}>
				<div className="grid grid-cols-3 gap-4 ">
					<div className="col-span-3">
						
						<Box sx={{ maxWidth: "73vw" }}>
							<Carousel></Carousel>
						</Box>
					</div>
					<div className="col-span-2">
						{[...Array(10)].map((_, i) => (
							<Box key={i} sx={{ maxWidth: "50vw" }}>
								<FeedPost content="" image="static/iguana.jpg"></FeedPost>
							</Box>
						))}
					</div>
					<div className="col-span-1">
						<Box sx={{ position: "sticky", top: "66px", maxWidth: "21vw" }}>
							<Popular />
						</Box>
					</div>
				</div>
			</Box>
		</>
	);
}
