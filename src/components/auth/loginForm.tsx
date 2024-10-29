"use client";

import { Button, Dialog } from "@mui/material";
import React from "react";

export default function LoginForm() {
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button color="primary" variant="contained" sx={{ borderRadius: 5 }} onClick={handleClickOpen}>
				Login
			</Button>
			<Dialog open={open} onClose={handleClose}>
				awd
			</Dialog>
		</div>
	);
}
