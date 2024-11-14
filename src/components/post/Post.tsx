import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function FeedPost() {
	return (
		<>
			<Card raised={false} sx={{ background: "#121212" }}>
				<CardActionArea>
					<CardContent className="mx-1">
						<Avatar></Avatar>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<CardMedia component="img" className="rounded-2xl" height="140" sx={{ border: 1 }} />
						<CardActions>
							<Button variant="contained" className="rounded-full">
								<IconButton size="small">
									<ArrowUpwardIcon />
								</IconButton>
								46 mil
								<IconButton size="small">
									<ArrowDownwardIcon />
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
