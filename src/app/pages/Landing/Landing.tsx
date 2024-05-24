/** @format */
import Navbar from "@/app/component/Navbar/Navbar";
import React from "react";
import { BsCashCoin, BsCoin } from "react-icons/bs";
import {
	FaCashRegister,
	FaFemale,
	FaGamepad,
	FaSuperpowers,
} from "react-icons/fa";

function Landing() {
	return (
		<div className=" w-full h-screen">
			<Navbar />
			<div className="w-full flex justify-center  lg:h-[68%]   bg-[#27064a] ">
				<div className="container mx-auto px-10">
					<div className="w-full h-full  flex lg:flex-row flex-col">
						<div className="md:w-1/2 w-full flex flex-col lg:pt-0 pt-8 justify-center items-center">
							<div className="w-full flex justify-start">
								<span className="text-green-500">Bonus</span>
							</div>
							<h1 className="lg:text-[2.7rem] text-[2rem] text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
								{" "}
								Best Casino Affiliate Programs for Everyone
							</h1>
							<span className="lg:text-[12px] text-md text-[#a4a4a4] pt-6">
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation
							</span>
							<div className="w-full flex justify-start py-6">
								<button className="rounded-sm px-8 py-6 bg-[#f92e78] text-white">
									<span className="uppercase font-semibold text-[14px]">
										Read More
									</span>
								</button>
							</div>
						</div>
						<div className="w-full h-full ">
							<img
								src="/images/slotmachine.jpeg"
								style={{ width: "100%", height: "100%" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full  bg-[#050103] ">
				<div className="container mx-auto md:p-28 p-12">
					<div className="w-full flex justify-center flex-col pb-10">
						<span className="text-green-500 uppercase text-center font-bold">
							Welcome
						</span>
						<h2 className="text-white font-bold lg:text-[3rem] text-[2rem] text-center">
							The best casino experience
						</h2>
					</div>

					<div className="w-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 mb-32">
						<div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
							<span className="text-green-500 uppercase flex justify-center pb-6 font-bold">
								<FaSuperpowers className="text-[50px] text-green-500 hover:text-[#f92e78]" />
							</span>
							<div className="w-full flex justify-center pb-3 ">
								<span className="text-white font-bold md:text-[1.3rem] text-[1rem]">
									Croupiers
								</span>
							</div>
							<div className=" flex justify-center">
								<span className="w-40  text-[#858585] text-center text-[17px]">
									Sed do eisum od temper
								</span>
							</div>
						</div>
						<div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
							<span className="text-green-500 uppercase flex justify-center pb-6  font-bold">
								<FaGamepad className="text-[50px] text-green-500 hover:text-[#f92e78] " />
							</span>
							<div className="w-full flex justify-center">
								<span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
									Slot Games
								</span>
							</div>
							<div className=" flex justify-center">
								<span className="w-40  text-[#858585] text-center text-[17px]">
									Sed do eisum od temper
								</span>
							</div>
						</div>
						<div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
							<span className="text-green-500 uppercase flex justify-center pb-6  font-bold">
								<FaCashRegister className="text-[50px] text-green-500 hover:text-[#f92e78]" />
							</span>
							<div className="w-full flex justify-center">
								<span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
									Money Prices
								</span>
							</div>
							<div className=" flex justify-center">
								<span className="w-40  text-[#858585] text-center text-[17px]">
									Sed do eisum od temper
								</span>
							</div>
						</div>
						<div className=" w-full py-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
							<span className="text-green-500 uppercase flex justify-center pb-6  font-bold">
								<BsCoin className="text-[50px] text-green-500 hover:text-[#f92e78]" />
							</span>
							<div className="w-full flex justify-center">
								<span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
									Easy Bets
								</span>
							</div>
							<div className=" flex justify-center">
								<span className="w-40  text-[#858585] text-center text-[17px]">
									Sed do eisum od temper
								</span>
							</div>
						</div>
					</div>
					<div className="w-full  flex lg:flex-row flex-col gap-12">
						<div className="xl:w-1/2 w-full h-full">
							<img
								src="/images/66.svg"
								style={{ width: "100%", height: "70%" }}
							/>
						</div>
						<div className="xl:w-1/2 w-full h-full">
							<h2 className="lg:text-[3rem] text-[2rem] pb-4 text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
								Get unlimited access to top games!
							</h2>
							<span className="lg:text-[16px] text-md text-[#a4a4a4] pt-6">
								Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
								quia voluptas sit aspernatur aut odit aut fugit.sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation
							</span>
							<div className="mt-9 mx-4">
								<ul className="list-disc text-[#b8b8b8]">
									<li className="pb-2">Sunt explicabo</li>
									<li className="pb-2">Sit aspernatur</li>
									<li className="pb-2">Incididunt ut labore</li>
								</ul>
							</div>
							<div className="w-full flex justify-start py-6">
								<button className="rounded-sm px-12 py-6 bg-[#f92e78] text-white">
									<span className="uppercase font-semibold text-[14px]">
										Bonuses
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<img src="/images/wheel.jpeg" style={{ width: "100%" }} />
				</div>
			</div>
		</div>
	);
}

export default Landing;
