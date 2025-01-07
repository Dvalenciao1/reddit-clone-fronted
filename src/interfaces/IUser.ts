export interface IUserLogin {
	email: string;
	password: string;
	token?: string;
}
export interface IUser {
	email: string;
}

export interface IUserRegister extends IUserLogin {}
