import { IFilterProps } from "@/types/index";

export const fetchCars = async (filters: IFilterProps) => {
	const headers = {
		"X-RapidAPI-Key": process.env.KEY || "",
		"X-RapidAPI-Host": process.env.HOST || "",
	};

	const { model, fuel, limit, manufacturer, year } = filters;
	const res = await fetch(`https://${process.env.HOST}/v1/cars?model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`, {
		headers: headers,
	});

	return res.json();
};
