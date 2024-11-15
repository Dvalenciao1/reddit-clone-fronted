import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InteractionButton from "./InteractionButton";

export default function FeedPost() {
	return (
		<>
			<Card raised={false} sx={{ background: "#121212" }}>
				<Box className="rounded-[32px]" >
					<CardContent className="mx-1">
						<Avatar className="my-1" sx={{ width: 24, height: 24 }}></Avatar>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<CardMedia component="img" className="rounded-2xl" image="static\reptile.jpeg" />
						<CardActions>
							<InteractionButton color="primary.main">
								<IconButton>
									<ArrowUpwardIcon className="text-base" />
								</IconButton>
								46 mil
								<IconButton>
									<ArrowDownwardIcon className="text-base" />
								</IconButton>
							</InteractionButton>

							<Button variant="contained" className="rounded-full">
								3 mil
							</Button>
							<Button variant="contained" className="rounded-full">
								2
							</Button>
							<Button variant="contained" className="rounded-full">
								Compartir
							</Button>
						</CardActions>
					</CardContent>
				</Box>
			</Card>
		</>
	);
}
