import ViewPost from "@/components/post/viewPost";
import Popular from "@/components/post/Popular";
import { Box } from "@mui/material";
import { IPost } from "@/interfaces/IPost";
import Comment from "@/components/post/Comment";

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
				content: "Que mal",
				user: {
					id: 1,
					username: "pepito",
				},
				comments: [
					{
						id: 2,
						content: "Que bien",
						user: {
							id: 2,
							username: "PuraRaza",
						},
					},
					{
						id: 1,
						content: "Que malo",
						user: {
							id: 1,
							username: "pepito",
						},
						comments: [
							{
								id: 2,
								content: "Que bien is",
								user: {
									id: 2,
									username: "PuraRaza",
								},
							},
						],
					},
				],
			},
			{
				id: 1,
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
					{post.comments.map((comment) => {
						return <Comment key={comment.id} comments={comment}></Comment>;
					})}
				</div>
				<div>
					<Popular></Popular>
				</div>
			</Box>
		</>
	);
}
