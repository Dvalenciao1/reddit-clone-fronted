import * as React from "react";
// Components import
import { Typography, List, Toolbar, Button, AppBar, Drawer, Box, IconButton, TextField } from "@mui/material";
// Icons
import { MoreHoriz, QrCode, HomeRounded, Moving, ExpandLess, ExpandMore, EmojiEmotionsRounded, SportsEsportsRounded, LiveHelpRounded, LiveHelpOutlined, SportsEsportsOutlined, EmojiEmotionsOutlined, MemoryOutlined, StarBorderOutlined, MovieOutlined } from "@mui/icons-material";
import Reddit from "../icon/reddit";
import NestedList from "../list/NestedList";
import { listProps } from "./IListProps";

const drawerWidth = 271;

const itemList: listProps[] = [
	{
		name: "Home",
		icon: <HomeRounded />,
	},
	{
		name: "Popular",
		icon: <Moving />,
	},
	{
		name: "Topics",
		separate: ["top", "bottom"],
		colapse: 1,
		subItems: [
			{
				name: "Internet Culture (Viral)",
				icon: <EmojiEmotionsOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Amazing",
					},
					{
						name: "Animals & Pets",
					},
					{
						name: "Cringe & Facepalm",
					},
					{
						name: "Funny",
					},
					{
						name: "Interesting",
					},
					{
						name: "Memes",
					},
					{
						name: " Oddly Satisfying",
					},
					{
						name: " Reddit Meta",
					},
					{
						name: "Wholesome & Heartwarming",
					},
				],
			},
			{
				name: "Games",
				icon: <SportsEsportsOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Action Games",
					},
					{
						name: "Adventure Games",
					},
					{
						name: "Esports",
					},
					{
						name: "Gaming Console & Gear",
					},
					{
						name: "Gaming News & Discussion",
					},
					{
						name: "Mobile Games",
					},
					{
						name: "Other Games",
					},
					{
						name: "Role-Playing Games",
					},
					{
						name: "Simulation Games",
					},
					{
						name: "Sports & Racing Games",
					},
					{
						name: "Strategy Games",
					},
					{
						name: "Tabletop Games",
					},
				],
			},
			{
				name: "Q&As",
				icon: <LiveHelpOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Q&As",
					},
					{
						name: "Stories & Confessions",
					},
				],
			},
			{
				name: "Technology",
				icon: <MemoryOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Q&As",
					},
					{
						name: "Stories & Confessions",
					},
				],
			},
			{
				name: "Pop Culture",
				icon: <StarBorderOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Celebrities",
					},
					{
						name: "Creators & Influencers",
					},
					{
						name: "Generations & Nosalgia",
					},
					{
						name: "Podcasts",
					},
					{
						name: "Streamers",
					},
					{
						name: "Tarot & Astrology",
					},
				],
			},
			{
				name: "Movies & TV",
				icon: <MovieOutlined />,
			},
		],
	},
];

export default function ClippedDrawer(props: any) {
	return (
		<Box>
			<AppBar position="fixed" sx={{ zIndex: 1200 + 1 }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start", gap: "5px" }}>
						<Reddit fontSize="30px" height={"40px"} />
						<Typography fontWeight={"bold"} fontSize={"2em"} variant="h5" noWrap component="h1" sx={{}}>
							reddit
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 9, display: "flex", justifyContent: "center", py: ".5rem" }}>
						<TextField size="small" slotProps={{ input: { style: { borderRadius: "50px" } } }} sx={{ width: "35rem" }} label="Search Reddit"></TextField>
					</Box>
					<Box sx={{ flexGrow: 2, display: "flex", justifyContent: "flex-end", gap: 2 }}>
						<Button color="secondary" variant="contained" sx={{ borderRadius: 5, display: { xs: "none", md: "flex" } }} startIcon={<QrCode />}>
							Get Access
						</Button>
						<Button color="primary" variant="contained" sx={{ borderRadius: 5 }}>
							Login
						</Button>
						<IconButton aria-label="more">
							<MoreHoriz />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
				}}>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<NestedList list={itemList} />
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{props.page}
			</Box>
		</Box>
	);
}
