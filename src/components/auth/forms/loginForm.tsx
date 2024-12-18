import { Link, TextField, Typography } from "@mui/material";

interface LoginFormProps {
	emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	passwordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	eventClick: () => void;
}

export function LoginForm({ emailChange, passwordChange, eventClick }: LoginFormProps) {
	const handledClick = () => {
		eventClick();
	};
	return (
		<>
			<div className="py-5">
				<TextField fullWidth className="mb-3" onChange={emailChange} slotProps={{ input: { style: { borderRadius: "16px" } } }} label="Email or Username" />
				<TextField fullWidth className="mt-3" onChange={passwordChange} slotProps={{ input: { style: { borderRadius: "16px" } } }} label="Password" />
			</div>
			<div>
				<Typography variant="body2">
					<Link color="info.dark" sx={{ "&:hover": { color: "info.light" } }} href="#" underline="none">
						Forgot password?
					</Link>
				</Typography>
				<Typography variant="body2">
					New to Reddit? &nbsp;
					<Link color="info.dark" sx={{ "&:hover": { color: "info.light" } }} onClick={handledClick} underline="none">
						Sign Up
					</Link>
				</Typography>
			</div>
		</>
	);
}
