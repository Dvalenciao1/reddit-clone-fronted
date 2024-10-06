import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "../components/navbar/NavBar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
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
				<CssBaseline />
				<body className={inter.className}>
					<NavBar page={children} />
				</body>
			</ThemeProvider>
		</html>
	);
}
