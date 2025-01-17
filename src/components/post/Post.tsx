"use client";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InteractionButton from "./InteractionButton";
import { useRouter } from "next/navigation";

export default function FeedPost({ title, image, content }: { title: string; image?: string; content?: string }) {
	const router = useRouter();

	const postContent = () => {
		if (content === "" && !image) return null;
		if (content) return <Typography variant="body1">{content}</Typography>;
		return <CardMedia component="img" className="rounded-2xl" image={image} />;
	};

	return (
		<>
			<Card elevation={0} raised={false} sx={{ background: "#121212", maxWidth: "800px", minWidth: "600px" }}>
				<Box className="rounded-[32px] hover:bg-[#252525] cursor-pointer">
					<CardContent sx={{ mx: 1, py: 0 }}>
						<Box>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Avatar sx={{ width: 24, height: 24, my: 1 }}></Avatar>
								<Typography sx={{ mx: 2 }} variant="caption" color="text.secondary">
									r/aww • hace 8 h
								</Typography>
							</Box>
							<Box sx={{ display: "", alignItems: "center" }}>
								<Button sx={{ "mx": 1, "bgcolor": "#115BCA", "borderRadius": "999px", "height": "24px", "textTransform": "capitalize", ":hover": { bgcolor: "#1870F4" } }} variant="contained">
									Unirse
								</Button>
								<IconButton sx={{ mx: 1, maxWidth: "32px", maxHeight: "32px" }}>
									<MoreHorizIcon />
								</IconButton>
							</Box>
						</Box>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						{postContent()}
						<CardActions>
							<InteractionButton color="secondary.main">
								<IconButton>
									<ArrowUpwardIcon sx={{ fontSize: "16px" }} />
								</IconButton>
								46 mil
								<IconButton>
									<ArrowDownwardIcon sx={{ fontSize: "16px" }} />
								</IconButton>
							</InteractionButton>

							<Button
								onClick={() => {
									router.push("/comment");
								}}
								startIcon={<MapsUgcIcon />}
								variant="contained"
								color="secondary"
								sx={{ borderRadius: 6, maxHeight: "32px" }}>
								3 mil
							</Button>
							<Button variant="contained" color="secondary" sx={{ borderRadius: 6, maxHeight: "32px" }}>
								<WorkspacePremiumIcon />
							</Button>
							<Button startIcon={<ShareIcon />} variant="contained" color="secondary" sx={{ borderRadius: 6, maxHeight: "32px" }}>
								Compartir
							</Button>
						</CardActions>
					</CardContent>
				</Box>
			</Card>
		</>
	);
}
