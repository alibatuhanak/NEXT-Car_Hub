import React from "react";
import Link from "next/link";
import { footerLinks } from "@/constants";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="flex flex-col text-gray-500 border-t border-gray-300 ">
			<div className="flex md:flex-row flex-col flex-wrap items-start justify-between gap-x-10 p-10 w-full h-full px-20 py-20">
				<div className="flex flex-col items-start justify-start ">
					<Image className="mb-4" src={"/logo.svg"} width={130} height={50} alt="footer_logo" />
					<p className="">Carhub 2023</p>
					<p className="">All Rights Reserverd &copy;</p>
				</div>
				<div className="flex  flex-wrap items-center md:justify-end lg:gap-x-24 gap-x-4 max-md:gap-y-10 max-md:mt-5 flex-1  mr-20">
					{footerLinks.map(item => (
						<div className="flex flex-col gap-y-6" key={item.title}>
							<h3 className="text-black font-semibold">{item.title}</h3>
							<div className="flex flex-col gap-4">
								{item.links.map(link => (
									<Link key={link.title} href={link.url}>
										{link.title}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-row items-center justify-between border-t border-gray-300 p-10 text-base">
				<p className="text-gray-700">@2023 CarHub. All rights reserved</p>
				<div className="flex gap-x-10">
					<p>Privacy & Policy</p>
					<p>Terms & Condition</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
