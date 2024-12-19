import { ViewPost } from "@/components/post/viewPost";
import Popular from "@/components/post/Popular";
import { Box } from "@mui/material";
import { Comment } from "@/components/post/Comment";

interface Comment {
	id: string;
	author: string;
	avatar: string;
	content: string;
	timestamp: string;
	votes: number;
	replies?: Comment[];
}

export default function CommentsPage() {
	const comments: Comment[] = [
		{
			id: "1",
			author: "mekmookbro",
			avatar: "/placeholder.svg",
			content: "Aurors hate this one trick",
			timestamp: "hace 7 h",
			votes: 1700,
			replies: [
				{
					id: "2",
					author: "mrjobby",
					avatar: "/placeholder.svg",
					content: "It got me through Ocarina of Timeturners",
					timestamp: "hace 6 h",
					votes: 208,
					replies: [
						{
							id: "3",
							author: "PotatoWriter",
							avatar: "/placeholder.svg",
							content: "Shackle bolt this thing in tight",
							timestamp: "hace 4 h",
							votes: 33,
						},
					],
				},
			],
		},
	];
	return (
		<>
			<Box sx={{ display: "flex", gap: 2 }}>
				<div className="flex-[1] my-2">
					<ViewPost image="static/iguana.jpg"></ViewPost>
					{comments.map((comment) => (
						<Comment key={comment.id}>
							<Comment>123</Comment>
							<Comment></Comment>
							<Comment></Comment>
							<Comment></Comment>
							<Comment></Comment>
						</Comment>
					))}
				</div>
				<Popular></Popular>
			</Box>
		</>
	);
}
