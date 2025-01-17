import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export function ImageCarousel() {
	return (
		<>
			<Card sx={{ minWidth: "280px", borderRadius: "16px", scrollSnapAlign: "start" }}>
				<CardActionArea sx={{ position: "relative", width: "280px" }}>
					<CardMedia sx={{ position: "absolute" }} component="img" image="iguana.jpg" alt="green iguana" />
					<CardContent sx={{ position: "relative", height: "210px", display: "flex", flexDirection: "column", justifyContent: "end", py: "5px" }}>
						<Typography component="h2" sx={{ fontWeight: "700", fontSize: "18px" }}>
							Chargers defeat Bengals
						</Typography>
						<Typography component="p" variant="caption" sx={{ fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", pb: "3px" }}>
							[Highlitght] Chargers game winning drive
						</Typography>
						<Avatar sx={{ width: 24, height: 24, bgcolor: "primary.main" }}></Avatar>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
}
