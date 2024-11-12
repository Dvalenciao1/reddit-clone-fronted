"use client";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Link, TextField, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
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
					<IconButton onClick={handleClose}>
						<ClearRoundedIcon />
					</IconButton>
				</DialogActions>
				<DialogContent sx={{ px: "80px" }}>
					<DialogTitle>
						<Typography variant="h4">Login</Typography>
					</DialogTitle>
					<DialogContent>
						<DialogContentText>By continuing, you agree to out User Agreement and acknowledge that you understand the Privacy Policy</DialogContentText>
						<div className="flex flex-col py-5">
							<Button className="mb-[6px] rounded-full bg-slate-100 text-slate-900" variant="contained">
								<div className="grid grid-cols-4">
									<GoogleIcon fontSize="small" />
									<Typography variant="button" className="col-span-2">
										Continue with Google
									</Typography>
								</div>
							</Button>
							<Button className="mt-[6px] rounded-full bg-slate-100 text-slate-900" variant="contained">
								<div className="grid grid-cols-4">
									<AppleIcon fontSize="small" />
									<Typography variant="button" className="col-span-2">
										Continue with Apple
									</Typography>
								</div>
							</Button>
						</div>
						<Divider>Or</Divider>
						<div className="py-5">
							<TextField fullWidth className="mb-3" slotProps={{ input: { style: { borderRadius: "16px" } } }} label="Email or Username" />
							<TextField fullWidth className="mt-3" slotProps={{ input: { style: { borderRadius: "16px" } } }} label="Password" />
						</div>
						<div>
							<Typography variant="body2">
								<Link color="info.dark" sx={{ "&:hover": { color: "info.light" } }} href="#" underline="none">
									Forgot password?
								</Link>
							</Typography>
							<Typography variant="body2">
								New to Reddit?{" "}
								<Link color="info.dark" sx={{ "&:hover": { color: "info.light" } }} href="#" underline="none">
									Sign Up
								</Link>
							</Typography>
						</div>
					</DialogContent>
				</DialogContent>
				<DialogActions className="flex flex-col px-[100px] py-[40px]">
					<Button fullWidth disabled variant="contained" className="rounded-full">
						Login
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
