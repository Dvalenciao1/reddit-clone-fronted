"use client";

import * as React from "react";
import { Avatar, Box, IconButton, Typography, Stack, Button, Card, CardContent, Stepper, Step, StepLabel } from "@mui/material";

export function Comment({ children }: Readonly<{ children?: React.ReactNode }>) {
	return (
		<Box sx={{ mb: 2 }}>
			<Stepper>
				<Step>{children}dawd</Step>
			</Stepper>
		</Box>
	);
}
