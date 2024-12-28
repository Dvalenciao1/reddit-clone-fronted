export interface IUserRegister {
	email: string;
	password: string;
}
export interface IUser {
	id: number;
	username: string;
}

export interface IUserLogin extends IUserRegister {
	username?: string;
	token?: string;
}
