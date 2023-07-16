"use client";
import React, { Fragment } from "react";
import { ICarDetailsProps } from "@/types/index";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const CarDetails: React.FC<ICarDetailsProps> = ({ isOpen, closeModal, car }) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10 " onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-1000"
								enterFrom="opacity-0 scale-50"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-1000"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-50"
							>
								<Dialog.Panel className="flex flex-col gap-3 relative w-full max-w-lg max-h-[85vh] overflow-y-auto transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<button onClick={closeModal} className="absolute p-2 bg-slate-200 rounded-[50%] right-4 top-5 z-10 shadow-2xl shadow-black">
										<Image src={"/close.svg"} width={20} height={20} alt="close_btn" />
									</button>

									<div className="flex flex-col w-full gap-3">
										<div className="flex w-full h-44 flex-col bg-cover bg-center bg-pattern rounded-xl relative">
											<Image className="object-contain" src={"/hero.png"} fill alt="car-image_details" />
										</div>
										<div className="flex gap-3">
											<div className="flex-1 h-20 relative bg-slate-200 rounded-xl">
												<Image className="object-contain" src={"/hero.png"} fill alt="car-image_details" />
											</div>
											<div className="flex-1 h-20 relative bg-slate-200 rounded-xl">
												<Image className="object-contain" src={"/hero.png"} fill alt="car-image_details" />
											</div>
											<div className="flex-1 h-20 relative bg-slate-200 rounded-xl">
												<Image className="object-contain" src={"/hero.png"} fill alt="car-image_details" />
											</div>
										</div>
									</div>
									<div className="mt-4 flex flex-col flex-wrap gap-4 capitalize ">
										<h1 className="text-2xl font-semibold mb-2">{car.make + " " + car.model}</h1>
										{Object.entries(car).map(([key, value]) => (
											<div key={key} className="flex justify-between items-center">
												<h2 className="capitalize text-gray-400">{key.split("_").join(" ")}</h2>
												<h2 className="font-semibold">{value}</h2>
											</div>
										))}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CarDetails;
