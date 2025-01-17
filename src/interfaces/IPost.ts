import { IComment } from "./IComment";
import { IUser } from "./IUser";

export interface IPost {
	id: number;
	title: string;
	content?: string;
	image?: string;
	user: IUser;
	comments: IComment[];
}
