"use client";
import { ICustomFilterProps, IOptionsOfCustomFilter } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

const CustomFilter: React.FC<ICustomFilterProps> = ({ title, options }) => {
	const [selected, setSelected] = useState<IOptionsOfCustomFilter>(options[0]);
	const router = useRouter();

	const handleSearch = () => {
		const searchParams = new URLSearchParams(window.location.search);

		if (selected.value !== "") {
			const value = selected.value.toString();

			searchParams.set(title, value.toLowerCase());

			const newURL = `${window.location.pathname}?${searchParams.toString()}`;
			router.push(newURL, {
				scroll: false,
			});
		} else {
			searchParams.delete(title);
			const newURL = `${window.location.pathname}?${searchParams.toString()}`;
			router.push(newURL, {
				scroll: false,
			});
		}
	};

	useEffect(() => {
		handleSearch();
	}, [selected]);
	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className={"w-40 relative mt-1 text-black "}>
				<Listbox.Button className="cursor-pointer relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
					<span className="block truncate">{selected.title}</span>
					<Image
						className="object-contain absolute right-2 top-0 bottom-0 my-auto"
						src={"/chevron-up-down.svg"}
						alt="chevron"
						width={25}
						height={25}
					/>
				</Listbox.Button>
				<Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
					<Listbox.Options className="absolute mt-1 max-h-60  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{options.map((option, idx) => (
							<Listbox.Option
								key={idx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-4 pr-4 ${active ? "bg-blue-700 text-white" : "text-gray-900"}`
								}
								value={option}
							>
								{({ selected }) => (
									<>
										<span className={` block truncate ${selected ? "font-medium" : "font-normal"}`}>{option.title}</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default CustomFilter;
