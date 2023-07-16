"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
	<button type="submit" className={`-ml-5 z-10    ${otherClasses}`}>
		<Image src="/magnifying-glass.svg" alt="magnifying-glasses" width={40} height={40} className="object-contain" />
	</button>
);

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState<string>("");
	const [model, setModel] = useState<string>("");

	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (manufacturer === "" && model === "") {
			return alert("Please fill in the search bar!");
		}
		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}

		const newURL = `${window.location.pathname}?${searchParams.toString()}`;

		router.push(newURL, {
			scroll: false,
		});
	};

	return (
		<form className="max-sm:w-full w-3/5 sm:flex gap-y-4" onSubmit={handleSearch}>
			<div className="flex w-full">
				<SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
				<SearchButton otherClasses="sm:hidden z-10" />
			</div>
			<div className="relative flex w-full 	">
				<label className="cursor-pointer" htmlFor="model">
					<Image src="/model-icon.png" alt="model-icon" width={25} height={25} className="absolute w-5 h-5 top-3 left-5" />
				</label>

				<input
					id="model"
					name="model"
					value={model}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModel(e.target.value)}
					type="text"
					placeholder="Tiguan"
					className="bg-gray-100 max-sm:rounded-s-full rounded-e-full h-12 w-full pl-12 p-4 outline-none cursor-pointer"
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden w-1/4" />
		</form>
	);
};

export default SearchBar;
