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
				}}
				className="rounded-full">
				{children}
			</Box>
		</>
	);
}
