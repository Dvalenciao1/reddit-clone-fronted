import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const drawerWidth = 240;

export default function ClippedDrawer(props: any) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" sx={{ zIndex: 1200 + 1 }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Logo
					</Typography>
					<Box sx={{ display: "flex", direction: "row", justifyContent: "center", alignItems: "center", paddingY: "8px", flexGrow: 1 }}>
						<TextField size="small" slotProps={{ input: { style: { borderRadius: "50px" } } }} fullWidth={true} label="Search Reddit"></TextField>
					</Box>
					<Box>
						<Button color="secondary" variant="contained" sx={{ mr: 3, borderRadius: 5 }}>
							Get Access
						</Button>
						<Button color="primary" variant="contained" sx={{ borderRadius: 5 }}>
							Login
						</Button>
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
						{["Home", "Popular"].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{["Topics"].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{["Resources"].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
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
