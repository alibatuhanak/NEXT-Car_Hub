"use client";
import { ICarProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface ICarCardProps {
	car: ICarProps;
}

const CarCard: React.FC<ICarCardProps> = ({ car }) => {
	const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="hover:bg-[#ffffff] hover:shadow-lg group p-5 rounded-xl flex flex-col items-start justify-between gap-y-7 bg-[#f0f3fb]">
			<h2 className="text-2xl font-semibold text capitalize">
				{car.make} {car.model}
			</h2>
			<p className="flex text-3xl font-bold">
				<span className="self-start text-sm font-semibold">$</span>52<span className="text-sm self-end font-semibold">/day</span>
			</p>
			<div className="relative w-full h-36">
				<Image className="object-contain" alt="car-card_image" fill src={"/hero.png"} />
			</div>
			<div className="flex justify-between items-center w-full text-gray-500 font-normal text-sm group-hover:hidden">
				<div className="h-full flex flex-col items-center justify-between  gap-y-2">
					<Image src={"/steering-wheel.svg"} width={21} height={20} alt="wheel" />
					<p>{transmission === "a" ? "Automatic" : "Manual"}</p>
				</div>
				<div className="h-full flex flex-col items-center justify-between ">
					<Image src={"/tire.svg"} width={21} height={20} alt="tire" />
					<p>{drive.toUpperCase()}</p>
				</div>
				<div className="h-full flex flex-col items-center justify-between ">
					<Image src={"/gas.svg"} width={21} height={20} alt="gas" />
					<p>{city_mpg} MPG</p>
				</div>
			</div>
			<div className="w-full hidden items-center group-hover:flex">
				<CustomButton
					rightIcon="/right-arrow.svg"
					containerStyles="bg-blue-700 py-[14.5px] w-full text-sm font-semibold text-white hover:bg-blue-800"
					handleClick={(): void => setIsOpen(true)}
				>
					View More
				</CustomButton>
			</div>
			{isOpen && <CarDetails isOpen={isOpen} closeModal={(): void => setIsOpen(false)} car={car} />}
		</div>
	);
};

export default CarCard;
