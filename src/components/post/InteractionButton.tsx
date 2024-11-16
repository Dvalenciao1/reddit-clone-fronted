import { Box } from "@mui/material";

export default function InteractionButton({ children, color = "#fff" }: Readonly<{ children: React.ReactNode; color?: string }>) {
	return (
		<>
			<Box
				sx={{
					fontSize: 12,
					bgcolor: color,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "999px",
				}}>
				{children}
			</Box>
		</>
	);
}
