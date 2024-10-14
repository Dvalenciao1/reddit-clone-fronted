"use client";
import { Box, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { listProps } from "../navbar/IListProps";

const RenderList = ({ name, icon, separate, subItems, isDense, borderLeft, colapse }: listProps) => {
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	if (!subItems) {
		return (
			<>
				<ListItemButton>
					{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
					<ListItemText primary={name} />
				</ListItemButton>
			</>
		);
	} else {
		return (
			<div>
				{separate?.includes("top") ? <Divider /> : null}
				<ListItemButton onClick={handleClick}>
					{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
					<ListItemText primary={name} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} sx={{ pl: colapse }}>
					<List dense={isDense}>
						{subItems.map((items, index) => {
							return (
								<Box sx={{ borderLeft: borderLeft || 0 }} key={items.name}>
									<RenderList key={items.name} {...items} />
								</Box>
							);
						})}
					</List>
				</Collapse>
				{separate?.includes("bottom") ? <Divider /> : null}
			</div>
		);
	}
};

export default function NestedList({ list }: { list: listProps[] }) {
	return (
		<List>
			{list.map((items, index) => {
				return <RenderList key={items.name} {...items} />;
			})}
		</List>
	);
}
