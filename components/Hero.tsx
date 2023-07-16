"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero: React.FC = () => {
	const handleScroll = () => {};

	return (
		<div className="w-[90vw] min-h-screen flex xl:flex-row flex-col justify-center items-start gap-6">
			<div className="flex-1 h-full  pt-40 px-6 ">
				<h1 className="text-5xl md:text-7xl font-bold xl:!leading-[6rem]">Find, book or rent a car - quickly and easily!</h1>
				<p className=" text-xl md:text-2xl font-normal mt-16">Streamline your car rental experience with our effortless booking process.</p>
				<CustomButton containerStyles="text-white mt-6 bg-blue-700 hover:bg-blue-800" handleClick={handleScroll}>
					Explore Cars
				</CustomButton>
			</div>
			<div className="w-full xl:h-screen xl:flex-[1.5] flex justify-end items-center">
				<div className="xl:w-full w-[90%] h-[590px] xl:h-full relative">
					<Image src="/hero.png" fill alt="hero" className="object-contain" />
					<div className=" absolute right-[-25%] xl:bottom-28  xl:w-[900px] w-[400px] h-full bg-hero-image -z-10 bg-repeat-round overflow-hidden -rotate-1" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
