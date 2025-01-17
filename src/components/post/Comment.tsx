"use client";

import * as React from "react";
import { Avatar, Box, IconButton, Typography, Stack, Button, Card, CardContent, Stepper, Step, StepLabel } from "@mui/material";
import RenderComment from "./RenderComment";
import { IUser } from "@/interfaces/IUser";

export default function Comment({ comments }: Readonly<{ comments: any }>) {
	return (
		<Box sx={{ my: 3 }}>
			{comments.map((comment: any) => (
				<div key={comment.id}>{comment.content}</div>
			))}
			{/* <RenderComment comments={comments}></RenderComment> */}
		</Box>
	);
}
