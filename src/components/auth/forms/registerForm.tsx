import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Link, TextField, Typography } from "@mui/material";

interface RegisterProps {
	emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	passwordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	eventClick: (data?: boolean) => void;
}
export default function RegisterForm({ emailChange, passwordChange, eventClick }: RegisterProps) {
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
				<Typography variant="body2"></Typography>
				<Typography variant="body2">
					Already a redditor?&nbsp;
					<Link color="info.dark" sx={{ "&:hover": { color: "info.light" } }} onClick={handledClick} underline="none">
						Log in
					</Link>
				</Typography>
			</div>
		</>
	);
}
