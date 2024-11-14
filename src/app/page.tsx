import FeedPost from "@/components/post/Post";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<>
			<Box sx={{ flexGrow: 2, maxWidth: "50vw" }} className='mt-7'>
				<FeedPost></FeedPost>
			</Box>
		</>
	);
}
