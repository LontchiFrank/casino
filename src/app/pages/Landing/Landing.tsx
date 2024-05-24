/** @format */
import Navbar from "@/app/component/Navbar/Navbar";
import React from "react";

function Landing() {
	return (
		<div className=" w-full h-screen">
			<Navbar />
			<div className="w-full flex justify-center  md:h-[68%] h-[80%]  bg-[#27064a] ">
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
			<div className="w-full h-full bg-black ">
				<img src="/images/38.svg" className="absolute left-0 w-full -z-10" />
			</div>
		</div>
	);
}

export default Landing;
