"use client";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, TextField } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
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
		<>
			<Button color="primary" variant="contained" sx={{ borderRadius: 5 }} onClick={handleClickOpen}>
				Login
			</Button>
			<Dialog fullWidth={true} maxWidth={"sm"} open={open} onClose={handleClose}>
				<DialogActions>
					<IconButton>
						<ClearRoundedIcon />
					</IconButton>
				</DialogActions>
				<DialogContent sx={{ px: "80px" }}>
					<DialogTitle>Login</DialogTitle>
					<DialogContent>
						<DialogContentText>By continuing, you agree to out User Agreement and acknowledge that you understand the Privacy Policy</DialogContentText>
						<div className="flex flex-col py-5">
							<Button className="mb-[6px] rounded-full bg-slate-100 text-slate-900" variant="contained">
								Continue with Google
							</Button>
							<Button className="mt-[6px] rounded-full bg-slate-100 text-slate-900" variant="contained">
								Continue with Apple
							</Button>
						</div>
						<Divider>Or</Divider>
						<div className="py-5">
							<TextField fullWidth className="mb-3" slotProps={{ input: { style: { borderRadius: "16px" } } }} label="Email or Username"/>
							<TextField fullWidth className="mt-3" slotProps={{ input: { style: { borderRadius: "16px" } } }} label="Password"/>
						</div>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button type="submit">Login</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
