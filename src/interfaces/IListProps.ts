export interface listProps {
	name: string;
	icon?: React.JSX.Element;
	separate?: string[] | undefined;
	isDense?: boolean;
	borderLeft?: number;
	colapse?: number;
	subItems?: listProps[] | undefined;
}
