import * as React from "react";
// Components import
import { Typography, Toolbar, Button, AppBar, Drawer, Box, IconButton, TextField } from "@mui/material";
// Icons
import { MoreHoriz, QrCode } from "@mui/icons-material";
import Reddit from "../icon/reddit";
import NestedList from "../list/NestedList";
import LoginForm from "../auth/loginForm";
import { itemList } from "@/utils/menu";

const drawerWidth = 271;

export default function ClippedDrawer({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Box sx={{ display: "flex" }}>
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
						<LoginForm />
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
			<Box component="main" sx={{ flexGrow: 1, pt: 8, px: 5, height: "100vh" }} className="">
				{children}
			</Box>
		</Box>
	);
}
