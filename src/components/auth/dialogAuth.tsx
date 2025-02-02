"use client";
import React, { useEffect } from "react";
import axios from "@/utils/axios";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "../icon/GoogleIcon";
import RegisterForm from "./forms/registerForm";
import { LoginForm } from "./forms/loginForm";
import { IUserLogin, IUserRegister } from "@/interfaces/IUser";
import { AxiosError, AxiosResponse } from "axios";

export default function DialogAuth() {
	const [open, setOpen] = React.useState(false);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [disabled, setDisabled] = React.useState(true);
	const [showLogin, setShowLogin] = React.useState(true);

	const handledLogin = async (user: IUserLogin) => {
		axios
			.post("/auth/login", user)
			.then((response: AxiosResponse) => {
				console.log("🚀 ~ file: dialogAuth.tsx:24 ~ response:", response);
				handleClose();
			})
			.catch((error: AxiosError) => {
				console.error("There was an error making the request!", error);
			});
	};
	const handledRegister = async (user: IUserRegister) => {
		axios
			.post("/auth/sign", user)
			.then((response: AxiosResponse) => {
				handleClose();
			})
			.catch((error: AxiosError) => {
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
					setShowLogin(true);
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
