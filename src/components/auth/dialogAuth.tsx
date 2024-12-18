"use client";
import React, { use, useEffect } from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "../icon/GoogleIcon";
import RegisterForm from "./forms/registerForm";
import { LoginForm } from "./forms/loginForm";
import { IUserLogin, IUserRegister } from "@/interfaces/IUser";

export default function DialogAuth() {
	const [open, setOpen] = React.useState(false);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [disabled, setDisabled] = React.useState(true);
	const [showLogin, setShowLogin] = React.useState(true);

	const handledLogin = async (user: IUserLogin) => {
		axios
			.post("http://localhost:3000/api/v1/auth/login", user)
			.then((response) => {
				handleClose();
			})
			.catch((error) => {
				console.error("There was an error making the request!", error);
			});
	};
	const handledRegister = async (user: IUserRegister) => {
		axios
			.post("http://localhost:3000/api/v1/auth/sign", user)
			.then((response) => {
				handleClose();
			})
			.catch((error) => {
				console.error("There was an error making the request!", error);
			});
	};

	useEffect(() => {
		setDisabled(!(email !== "" && password !== ""));
	}, [email, password]);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				color="primary"
				variant="contained"
				sx={{ borderRadius: 5, textTransform: "none" }}
				onClick={() => {
					handleOpen();
				}}>
				Iniciar sesión
			</Button>
			<Dialog
				fullWidth={true}
				maxWidth={"sm"}
				open={open}
				onClose={() => {
					handleClose();
					setDisabled(true);
				}}>
				<DialogActions>
					<IconButton onClick={handleClose}>
						<ClearRoundedIcon />
					</IconButton>
				</DialogActions>
				<DialogContent sx={{ px: "80px" }}>
					<DialogTitle variant="h4">{showLogin ? "Login" : "Register"}</DialogTitle>
					<DialogContent>
						<DialogContentText>By continuing, you agree to out User Agreement and acknowledge that you understand the Privacy Policy</DialogContentText>
						<div className="flex flex-col py-5">
							<Button className="mb-[6px] rounded-full" disableElevation color="slate" variant="contained">
								<GoogleIcon fontSize="small" />
								<Typography variant="button" className="grow">
									Continue with Google
								</Typography>
							</Button>
							<Button className="mt-[6px] rounded-full" disableElevation color="slate" variant="contained">
								<AppleIcon fontSize="small" />
								<Typography variant="button" className="grow">
									Continue with Apple
								</Typography>
							</Button>
						</div>
						<Divider>Or</Divider>
						{showLogin ? (
							<LoginForm
								emailChange={handleEmailChange}
								passwordChange={handlePasswordChange}
								eventClick={() => {
									setShowLogin(false);
								}}></LoginForm>
						) : (
							<RegisterForm
								emailChange={handleEmailChange}
								passwordChange={handlePasswordChange}
								eventClick={() => {
									setShowLogin(true);
								}}></RegisterForm>
						)}
					</DialogContent>
				</DialogContent>
				<DialogActions className="flex flex-col px-[100px] py-[40px]">
					<Button
						fullWidth
						disabled={disabled}
						variant="contained"
						className="rounded-full"
						onClick={() => {
							if (!showLogin) handledRegister({ email, password });
							else handledLogin({ email, password });
						}}>
						{showLogin ? "Login" : "Register"}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
