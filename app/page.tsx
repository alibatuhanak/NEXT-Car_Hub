import CarCard from "@/components/CarCard";
import CustomButton from "@/components/CustomButton";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/services";
import { ICarProps, IHome } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: IHome) {
	const data = await fetchCars({
		manufacturer: searchParams.manufacturer || "",
		model: searchParams.model || "",
		fuel: searchParams.fuel || "",
		year: searchParams.year || 2020,
		limit: searchParams.limit || 10,
	});

	const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

	return (
		<main className="w-full min-h-screen flex flex-col justify-center items-center overflow-hidden ">
			<Hero />
			<div className="w-[90vw] mt-12 px-4 py-6 flex flex-col">
				<div className="gap-y-2 flex flex-col ">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className="w-full mt-10 flex items-center flex-col lg:flex-row justify-between pb-16 gap-4">
					<SearchBar />
					<div className="flex lg:flex-row  justify-center items-center gap-4 ">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>
				{!isDataEmpty ? (
					<div className="py-10 w-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
						{data?.map((car: ICarProps, key: number) => (
							<CarCard key={key} car={car} />
						))}
					</div>
				) : (
					<div className="min-h-[30vh] flex justify-center items-center flex-col gap-4">
						<Image src={"/error.png"} alt="not-found" width={250} height={250} className="object-contain" />
						<Link className="overflow-hidden rounded-full" href={"/"}>
							<CustomButton containerStyles="bg-blue-700 text-white hover:bg-blue-800">Data Not Found</CustomButton>
						</Link>
					</div>
				)}
				<div></div>
			</div>
		</main>
	);
}
