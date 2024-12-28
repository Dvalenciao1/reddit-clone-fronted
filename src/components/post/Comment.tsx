"use client";

import * as React from "react";
import { Avatar, Box, IconButton, Typography, Stack, Button, Card, CardContent, Stepper, Step, StepLabel } from "@mui/material";
import RenderComment from "./RenderComment";

export default function Comment({ children, comments }: Readonly<{ children?: React.ReactNode; comments: any }>) {
	return (
		<Box sx={{ my: 3 }}>
			<RenderComment user={comments.user} content={comments.content} goals={12} vote={199} subComments={comments.comments}></RenderComment>
		</Box>
	);
}
