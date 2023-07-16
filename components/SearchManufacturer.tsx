import { ISearchManufacturerProps } from "@/types";
import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer: React.FC<ISearchManufacturerProps> = ({ manufacturer, setManufacturer }) => {
	const [query, setQuery] = useState<string>("");

	const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item: string) => item.toLowerCase().includes(query.toLowerCase()));

	return (
		<div className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 z-10">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="relative w-full ">
					<Combobox.Button className={"absolute top-3.5 "}>
						<Image src={"/car-logo.svg"} width={20} height={20} alt="Car Logo" className=" ml-4 " />
					</Combobox.Button>
					<Combobox.Button className="w-full ">
						<Combobox.Input
							placeholder="Volkswagen"
							displayValue={(manufacturer: string) => manufacturer}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
							className={" w-full h-[48px] pl-12 p-4 bg-gray-100  rounded-s-full outline-none cursor-pointer text-sm;"}
						/>
					</Combobox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options
							className=" absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							static
						>
							{filteredManufacturers.map((item: string, key: number) => (
								<Combobox.Option
									key={key}
									value={item}
									className={({ active }) =>
										`cursor-default select-none py-2 pl-10 pr-4  ${active ? "bg-blue-700 text-white" : "text-black"}`
									}
								>
									{item}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
