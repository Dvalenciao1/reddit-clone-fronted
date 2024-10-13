import * as React from "react";
// Components import
import { ListItemText, ListItemButton, ListItem, Divider, Typography, List, Toolbar, Button, AppBar, Drawer, Box, IconButton, ListItemIcon, TextField } from "@mui/material";
// Icons
import { MoreHoriz, QrCode, HomeRounded, Moving, ExpandLess, ExpandMore } from "@mui/icons-material";
import Reddit from "../icon/reddit";

const drawerWidth = 240; 


const itemList = [
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
		icon: "",
		separate: ["top", "bottom"],
		subItems: [
			{
				name: "Internet Culture",
			},
			{
				name: "Games",
			},
			{
				name: "Q&As",
			},
			{
				name: "Technology",
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
					<List>
						{itemList.map((item, index) => (
							<Box key={index}>
								{item?.separate?.includes("top") ? <Divider /> : ""}
								<ListItem key={item.name} disablePadding>
									<ListItemButton >
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText primary={item.name} />
									</ListItemButton>
								</ListItem>
								{item?.separate?.includes("bottom") ? <Divider /> : ""}
							</Box>
						))}
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{props.page}
			</Box>
		</Box>
	);
}
