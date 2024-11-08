import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "../components/navbar/NavBar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";
import "@/Global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Reddit",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
				<body className={inter.className}>
					<NavBar />
					<Box component="main" sx={{ flexGrow: 2, pl: "18rem", pt: 7 }}>
						{children}
					</Box>
				</body>
			</ThemeProvider>
		</html>
	);
}
