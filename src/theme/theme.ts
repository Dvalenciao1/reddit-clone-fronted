"use client";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
	interface Palette {
		ochre: Palette["primary"];
	}

	interface PaletteOptions {
		slate?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		slate: true;
	}
}

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#FF4F40",
		},
		secondary: {
			main: "#3d494e",
		},
		slate: {
			light: "#f8fafc",
			main: "#f5f5f5",
			dark: "#f5f5f5",
			contrastText: "#171717",
		},
	},
});
