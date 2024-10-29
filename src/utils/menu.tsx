import { listProps } from "@/components/navbar/IListProps";
import { HomeRounded, Moving, LiveHelpOutlined, SportsEsportsOutlined, EmojiEmotionsOutlined, MemoryOutlined, StarBorderOutlined, MovieOutlined } from "@mui/icons-material";

export const itemList: listProps[] = [
	{
		name: "Home",
		icon: <HomeRounded />,
	},
	{
		name: "Popular",
		icon: <Moving />,
	},
	{
		name: "Topics",
		separate: ["top", "bottom"],
		colapse: 1,
		subItems: [
			{
				name: "Internet Culture (Viral)",
				icon: <EmojiEmotionsOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Amazing",
					},
					{
						name: "Animals & Pets",
					},
					{
						name: "Cringe & Facepalm",
					},
					{
						name: "Funny",
					},
					{
						name: "Interesting",
					},
					{
						name: "Memes",
					},
					{
						name: " Oddly Satisfying",
					},
					{
						name: " Reddit Meta",
					},
					{
						name: "Wholesome & Heartwarming",
					},
				],
			},
			{
				name: "Games",
				icon: <SportsEsportsOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Action Games",
					},
					{
						name: "Adventure Games",
					},
					{
						name: "Esports",
					},
					{
						name: "Gaming Console & Gear",
					},
					{
						name: "Gaming News & Discussion",
					},
					{
						name: "Mobile Games",
					},
					{
						name: "Other Games",
					},
					{
						name: "Role-Playing Games",
					},
					{
						name: "Simulation Games",
					},
					{
						name: "Sports & Racing Games",
					},
					{
						name: "Strategy Games",
					},
					{
						name: "Tabletop Games",
					},
				],
			},
			{
				name: "Q&As",
				icon: <LiveHelpOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Q&As",
					},
					{
						name: "Stories & Confessions",
					},
				],
			},
			{
				name: "Technology",
				icon: <MemoryOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Q&As",
					},
					{
						name: "Stories & Confessions",
					},
				],
			},
			{
				name: "Pop Culture",
				icon: <StarBorderOutlined />,
				isDense: true,
				borderLeft: 1,
				colapse: 3,
				subItems: [
					{
						name: "Celebrities",
					},
					{
						name: "Creators & Influencers",
					},
					{
						name: "Generations & Nosalgia",
					},
					{
						name: "Podcasts",
					},
					{
						name: "Streamers",
					},
					{
						name: "Tarot & Astrology",
					},
				],
			},
			{
				name: "Movies & TV",
				icon: <MovieOutlined />,
			},
		],
	},
];
