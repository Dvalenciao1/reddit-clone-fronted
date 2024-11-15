import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function FeedPost() {
	return (
		<>
			<Card raised={false} sx={{ background: "#121212" }}>
				<CardActionArea component="span" className="rounded-[32px]">
					<CardContent className="mx-1">
						<Avatar className="my-1" sx={{ width: 24, height: 24 }}></Avatar>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<CardMedia component="img" className="rounded-2xl" image="static\reptile.jpeg" />
						<CardActions>
							<Button variant="contained" className="rounded-full">
								<IconButton>
									<ArrowUpwardIcon className="text-base" />
								</IconButton>
								46 mil
								<IconButton>
									<ArrowDownwardIcon className="text-base" />
								</IconButton>
							</Button>
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
				</CardActionArea>
			</Card>
		</>
	);
}
