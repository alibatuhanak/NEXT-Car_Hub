"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar: React.FC = () => {
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [visible, setVisible] = useState<boolean>(false);
	const [color, setColor] = useState<boolean>(false);

	const changeColor = () => {
		if (window.scrollY >= 60) setColor(true);
		else setColor(false);
	};

	const handleScroll = () => {
		if (window.scrollY > 200) {
			const currentScrollPos = window.scrollY;
			if (currentScrollPos > prevScrollPos) {
				setVisible(true);
			} else setVisible(false);
			setPrevScrollPos(currentScrollPos);
		}
	};

	useEffect(() => {
		// window.addEventListener("scroll", handleScroll);
		// window.addEventListener("scroll", changeColor);
		return () => {
			// window.removeEventListener("scroll", handleScroll);
			// window.removeEventListener("scroll", changeColor);
		};
	}, [color, visible, prevScrollPos]);

	return (
		<nav
			className={`w-full absolute h-16 flex justify-between items-center mx-auto sm:px-[100px] px-6 py-10   ${visible ? "hidden" : ""} ${
				color && "bg-[#E0EAFC]"
			}`}
		>
			<Link href={"/"}>
				<Image src={`/logo.svg`} alt="" width={120} height={20} className="object-contain" />
			</Link>
			<CustomButton
				containerStyles={`max-xl:border-2 max-xl:border-blue-700  font-semibold transition-all duration-500 ${
					color ? "bg-blue-700 text-white" : "bg-white text-blue-700"
				}`}
			>
				Sign up
			</CustomButton>
		</nav>
	);
};

export default Navbar;
