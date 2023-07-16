import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
	children: React.ReactNode;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	rightIcon?: string;
}

export interface ISearchManufacturerProps {
	manufacturer: string;
	setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface ICarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: ICarProps;
}

export interface IHome {
	searchParams: IFilterProps;
}

export interface IFilterProps {
	manufacturer: string;
	model: string;
	fuel: string;
	year: number;
	limit: number;
}

export interface ICustomFilterProps {
	title: string;
	options: IOptionsOfCustomFilter[];
}

export interface IOptionsOfCustomFilter {
	title: string | number;
	value: string | number;
}
