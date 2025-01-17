"use client";
import Carousel from "@/components/post/carousel";
import Popular from "@/components/post/Popular";
import FeedPost from "@/components/post/Post";
import { Box } from "@mui/material";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";

export default function Home() {
	const [feed, setFeed] = useState<any[]>([]);

	useEffect(() => {
		let isMounted = true;

		axios
			.get("/post")
			.then((response) => {
				if (isMounted) {
					setFeed(response.data);
				}
			})
			.catch((error) => {
				if (isMounted) {
					console.error("Error fetching feed:", error);
				}
			});
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<Box sx={{ flexGrow: 1, height: "100vh", margin: "12px 12px" }}>
			<div className="grid grid-cols-3 gap-4 ">
				<div className="col-span-3">
					<Box sx={{ maxWidth: "73vw" }}>
						<Carousel></Carousel>
					</Box>
				</div>
				<div className="col-span-2">
					{feed.map((posts, i) => (
						<Box key={i} sx={{ maxWidth: "50vw" }}>
							<FeedPost title={posts.title} content={posts.content} image={posts.url}></FeedPost>
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
	);
}
