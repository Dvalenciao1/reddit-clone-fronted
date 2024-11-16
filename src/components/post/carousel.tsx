import { Box, Card, CardActionArea, CardMedia, Stack } from "@mui/material";

export default function Carousel() {
	return (
		<>
			<Stack direction="row" spacing={2}>
				<Card>
					<CardActionArea>
						<CardMedia component="img" height="140" image="static/iguana.jpg" alt="green iguana" />
					</CardActionArea>
				</Card>
			</Stack>
		</>
	);
}
