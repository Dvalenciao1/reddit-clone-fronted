import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ShareIcon from "@mui/icons-material/Share";
import InteractionButton from "./InteractionButton";

export default function FeedPost() {
	return (
		<>
			<Card elevation={0} raised={false} sx={{ background: "#121212" }}>
				<Box className="rounded-[32px] hover:bg-[#252525] cursor-pointer">
					<CardContent className="mx-1">
						<Avatar className="my-1" sx={{ width: 24, height: 24 }}></Avatar>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<CardMedia component="img" className="rounded-2xl" image="static\reptile.jpeg" />
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

							<Button startIcon={<MapsUgcIcon />} variant="contained" color="secondary" sx={{ borderRadius: 6, maxHeight: "32px" }}>
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
