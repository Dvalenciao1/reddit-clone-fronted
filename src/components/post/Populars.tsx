import { Avatar, Box, Card, CardContent, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";

export default function Populars() {
	return (
		<>
			<Card sx={{ mt: 1, background: "#000", borderRadius: "8px" }}>
				<CardContent>
					<Box component="div">
						<Typography gutterBottom variant="button" sx={{ color: "#8BA2AD" }} component="div">
							Comunidades Populares
						</Typography>
					</Box>
					<Box component="div">
						<List>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar></Avatar>
								</ListItemAvatar>
								<ListItemText primary="r/DestinyTheGame" secondary="3.251.754 miembros" />
							</ListItemButton>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar></Avatar>
								</ListItemAvatar>
								<ListItemText primary="r/DestinyTheGame" secondary="3.251.754 miembros" />
							</ListItemButton>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar></Avatar>
								</ListItemAvatar>
								<ListItemText primary="r/DestinyTheGame" secondary="3.251.754 miembros" />
							</ListItemButton>
						</List>
					</Box>
				</CardContent>
			</Card>
		</>
	);
}
