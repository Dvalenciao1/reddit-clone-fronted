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
	const post: IPost = {
		id: 1,
		title: "Nuevos",
		image: "static/iguana.jpg",
		user: {
			id: 1,
			username: "pepito",
		},
		comments: [
			{
				id: 1,
				content: "Oh dios",
				user: {
					id: 1,
					username: "pepito",
				},
			},
			{
				id: 2,
				parentId: 1,
				content: "Oh dios",
				user: {
					id: 1,
					username: "pepito",
				},
			},
			{
				id: 3,
				parentId: 2,
				content: "Oh dios",
				user: {
					id: 1,
					username: "pepito",
				},
			},
			{
				id: 1,
				parentId: 3,
				content: "Oh dios",
				user: {
					id: 1,
					username: "pepito",
				},
			},
		],
	};
	return (
		<>
			<Box sx={{ display: "flex", gap: 2 }}>
				<div className="flex-[1] my-2">
					<ViewPost title={post.title} image={post.image}></ViewPost>
					<Comment comments={post.comments}></Comment>
				</div>
				<Popular></Popular>
			</Box>
		</>
	);
}
