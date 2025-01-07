import { listProps } from "@/interfaces/IListProps";
import { IUser } from "@/interfaces/IUser";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import React from "react";

interface RenderCommentProps {
	user: IUser;
	content: string;
	vote: number;
	goals: number;
	subComments?: RenderCommentProps[];
}
export default function RenderComment({ comments = [] }: { comments: RenderCommentProps[] }) {
	const [open, setOpen] = React.useState(false);
	if (!comments) {
		return (
			<>
				<ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} disableRipple onClick={() => setOpen(!open)}>
					{/* <ListItemText primary={comments[0].content} /> */}
				</ListItemButton>
			</>
		);
	} else {
		return (
			<>
				<ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" } }} disableRipple onClick={() => setOpen(!open)}>
					{open ? <RemoveCircleOutline /> : <AddCircleOutline />}
					<ListItemText sx={{ px: 1 }} primary={comments[0].content} />
				</ListItemButton>

				<Collapse in={open}>
					<List>
						{comments.map((items, index) => {
							return (
								<Box sx={{ borderLeft: 2 }} key={items.content}>
									{/* <RenderComment comments={items} /> */}
								</Box>
							);
						})}
					</List>
				</Collapse>
			</>
		);
	}
}
