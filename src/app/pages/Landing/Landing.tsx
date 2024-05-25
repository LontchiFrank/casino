/** @format */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsCashCoin, BsCoin } from "react-icons/bs";
import { FaGamepad, FaSuperpowers } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { MdCasino } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";
import { IoDiamondOutline } from "react-icons/io5";
import { LuCherry, LuPackageOpen } from "react-icons/lu";
import LandingLayout from "@/app/component/LandingLayout/LandingLayout";
import { Fade, Bounce, Slide, Zoom } from "react-awesome-reveal";

function Landing() {
	const [isVisible, setIsVisible] = useState(false);
	const playerRef: any = useRef(null);
	const [startPlay, setStartPlay] = useState<boolean>(false);

	const handlePlay = () => {
		if (playerRef.current) {
			playerRef.current.play();
		}
		setStartPlay(true);
	};

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<LandingLayout>
			<div className=" w-full ">
				{isVisible && (
					<button
						onClick={scrollToTop}
						className="p-4 bg-[#f92e78] text-white rounded-lg shadow-lg hover:bg-[#ff5996]  fixed z-2 bottom-[18px] right-[18px] cursor-pointer">
						↑
					</button>
				)}
				<div className="w-full flex justify-center  lg:h-[68%]   bg-[#27064a] ">
					<div className="container mx-auto px-10">
						<div className="w-full h-full  flex lg:flex-row flex-col">
							<div className="lg:w-1/2 w-full flex flex-col lg:pt-0 pt-8 justify-center items-center">
								<div className="w-full flex justify-start">
									<Fade>
										<span className="text-green-500 pb-6">Bonus</span>
									</Fade>
								</div>
								<Slide direction="down">
									<h1 className="xl:text-[3.7rem] text-[2rem] text-white font-semibold xl:leading-[4rem] pb-2 leading-[3rem]">
										{" "}
										Best Casino Affiliate Programs for Everyone
									</h1>
								</Slide>

								<Fade>
									<span className="lg:text-[16px] text-md text-[#a4a4a4] pt-6">
										consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation, luctus et ultrices
										posuere cubilia curae; Duis id accumsan sem, congue a odio.
									</span>
								</Fade>
								<div className="w-full flex justify-start py-6">
									<Fade>
										<button className="rounded-sm px-8 py-6 bg-[#f92e78] hover:bg-[#ff5996]  text-white">
											<span className="uppercase font-semibold text-[14px]">
												Read More
											</span>
										</button>
									</Fade>
								</div>
							</div>
							<Zoom>
								<div className="w-full h-full ">
									<img
										src="/images/slotmachine.jpeg"
										style={{ width: "100%", height: "100%" }}
									/>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
				<div className="w-full  bg-[#050103] ">
					<div className="container mx-auto md:p-10 p-12">
						<div className="w-full flex justify-center flex-col pb-10">
							<span className="text-green-500 uppercase text-center font-bold">
								Welcome
							</span>
							<h2 className="text-white font-bold lg:text-[3rem] text-[2rem] text-center">
								The best casino experience
							</h2>
						</div>

						<div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mb-32">
							<div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c]  cursor-pointer">
								<span className="text-green-500 uppercase flex justify-center pb-6 font-bold">
									<FaSuperpowers className="text-[50px] text-green-500 hover:text-[#f92e78] " />
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
									<IoIosCash className="text-[50px] text-green-500 hover:text-[#f92e78]" />
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
									<MdCasino className="text-[50px] text-green-500 hover:text-[#f92e78]" />
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
						<div className="w-full  flex lg:flex-row flex-col gap-12 pb-16">
							<div className="xl:w-1/2 w-full h-full  ">
								<img
									src="/images/roulette.jpeg"
									style={{ width: "100%", height: "70%" }}
									className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
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
									<button className="rounded-sm px-12 py-6 bg-[#f92e78] hover:bg-[#ff5996]  text-white">
										<span className="uppercase font-semibold text-[14px]">
											Bonuses
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="star  w-full h-[60vh]">
						<div className="w-full h-full container mx-auto md:px-10 px-12 flex  ">
							<div className="lg:w-1/2 w-full  h-full flex flex-col justify-center items-center ">
								<div className="w-full flex justify-start">
									<span className="text-green-500 font-bold tracking-[.35em]">
										GAMBLE ALL YOU WANT
									</span>
								</div>
								<h2 className="lg:text-[3rem] text-[2rem] pb-4 text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
									Have fun and win prizes at our online casino!
								</h2>
							</div>
						</div>
					</div>
					<div className="w-full container mx-auto md:px-10 px-12 py-16">
						<div className="  flex flex-col ">
							<div className="w-full flex lg:flex-row flex-col ">
								<div className="lg:w-1/2 w-full ">
									<Player
										ref={playerRef}
										src="https://lottie.host/a5d65264-08e9-4150-9a85-800009370d11/3d2ue0AtZU.json"
										className="player"
										loop={startPlay}
										autoplay={startPlay}
									/>
									<div className="w-full flex justify-center">
										<button
											onClick={handlePlay}
											className="mt-4 py-4 px-9 bg-[#f92e78] hover:bg-[#ff5996] text-white rounded-lg ">
											Spin
										</button>
									</div>
								</div>
								<div className="lg:w-1/2 w-full pt-10">
									<div className="w-full flex justify-start">
										<span className="text-green-500 font-bold ">
											Top Casino Game
										</span>
									</div>
									<h2 className="lg:text-[3rem] uppercase text-[2rem] pb-4 text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
										Fortune Wheel
									</h2>
									<span className="lg:text-[16px] text-md text-[#a4a4a4] pt-6">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</span>
									<div className="w-full flex justify-center items-center pt-12">
										<img src="/images/casino.png" style={{ width: "60%" }} />
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex flex-col-reverse justify-center items-center gap-4 py-16">
							<div className="xl:w-full w-full  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-center gap-2">
								<div className="w-full md:max-w-sm p-4 bg-[#120d1c]   rounded-lg shadow sm:p-8 hover:scale-110 transition duration-500 cursor-pointer object-cover">
									<span className="text-green-500 uppercase flex justify-center pb-6  font-bold">
										<LuPackageOpen className="text-[50px] text-green-500 hover:text-[#f92e78] " />
									</span>
									<div className="w-full flex justify-center">
										<span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
											Normal Pack
										</span>
									</div>
									<div className="flex justify-center items-baseline text-white ">
										<span className="text-3xl font-semibold">$</span>
										<span className="text-5xl font-extrabold tracking-tight">
											0
										</span>
									</div>
									<div className="flex justify-center">
										<ul role="list" className="space-y-5 my-7">
											<li className="flex items-center">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Etiam eu lectus at lectus
												</span>
											</li>
											<li className="flex">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Suspendisse dignissim
												</span>
											</li>
											<li className="flex">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Nullam efficitur nunc
												</span>
											</li>
										</ul>
									</div>
									<button
										type="button"
										className="text-white bg-[#f92e78] hover:bg-[#ff5996] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
										Choose plan
									</button>
								</div>
								<div className="w-full md:max-w-sm p-4 bg-[#120d1c]   rounded-lg shadow sm:p-8 hover:scale-110 transition duration-500 cursor-pointer object-cover">
									<span className="text-green-500 uppercase flex justify-center pb-6  font-bold">
										<IoDiamondOutline className="text-[50px] text-green-500 hover:text-[#f92e78] " />
									</span>
									<div className="w-full flex justify-center">
										<span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
											Gold Pack
										</span>
									</div>
									<div className="flex justify-center items-baseline text-white ">
										<span className="text-3xl font-semibold">$</span>
										<span className="text-5xl font-extrabold tracking-tight">
											49
										</span>
										<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
											/month
										</span>
									</div>
									<div className="flex justify-center">
										<ul role="list" className="space-y-5 my-7">
											<li className="flex items-center">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Etiam eu lectus at lectus
												</span>
											</li>
											<li className="flex">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Suspendisse dignissim
												</span>
											</li>
											<li className="flex">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Nullam efficitur nunc
												</span>
											</li>
										</ul>
									</div>
									<button
										type="button"
										className="text-white bg-[#f92e78] hover:bg-[#ff5996]  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
										Choose plan
									</button>
								</div>

								<div className="w-full md:max-w-sm p-4 bg-[#120d1c]   rounded-lg shadow sm:p-8 hover:scale-110 transition duration-500 cursor-pointer object-cover">
									<span className="text-green-500 uppercase flex justify-center pb-6  font-bold">
										<LuCherry className="text-[50px] text-green-500 hover:text-[#f92e78] " />
									</span>
									<div className="w-full flex justify-center">
										<span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
											Silver Pack
										</span>
									</div>
									<div className="flex justify-center items-baseline text-white ">
										<span className="text-3xl font-semibold">$</span>
										<span className="text-5xl font-extrabold tracking-tight">
											29
										</span>
										<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
											/month
										</span>
									</div>
									<div className="flex justify-center">
										<ul role="list" className="space-y-5 my-7">
											<li className="flex items-center">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Etiam eu lectus at lectus
												</span>
											</li>
											<li className="flex">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Suspendisse dignissim
												</span>
											</li>
											<li className="flex">
												<svg
													className="flex-shrink-0 w-4 h-4 text-green-500 "
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
												</svg>
												<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
													Nullam efficitur nunc
												</span>
											</li>
										</ul>
									</div>
									<button
										type="button"
										className="text-white bg-[#f92e78] hover:bg-[#ff5996] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
										Choose plan
									</button>
								</div>
							</div>
							<div className=" w-full h-full">
								<span className="text-green-500 font-bold ">Order Now</span>
								<h2 className="lg:text-[3rem] text-[2rem] pb-4 text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
									Flexible Prices!
								</h2>
								<span className="lg:text-[16px] text-md text-[#a4a4a4] pt-6">
									Nam posuere pharetra arcu pulvinar pellentesque. Vestibulum
									faucibus nulla a ligula mollis, consequat tincidunt nisl
									porttitor. Nulla commodo magna ut blandit pellentesque.
									Suspendisse ut interdum ligula. Etiam at feugiat nibh. Proin
									eget ex euismod mi pharetra aliquam. Mauris vitae nisl justo.
									Proin dapibus nibh quis tempus ullamcorper. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Nulla orci nisl,
									convallis nec consectetur at, consequat at tortor.
									Pellentesque habitant morbi tristique senectus et netus et
									malesuada fames ac turpis egestas.
								</span>
								<div className="mt-9 mx-4">
									<ul className="list-disc text-[#b8b8b8]">
										<li className="pb-2">Sunt explicabo</li>
										<li className="pb-2">Sit aspernatur</li>
										<li className="pb-2">Incididunt ut labore</li>
									</ul>
								</div>
								<div className="w-full flex justify-start py-6">
									<button className="rounded-sm px-12 py-6 bg-[#f92e78] hover:bg-[#ff5996]  text-white">
										<span className="uppercase font-semibold text-[14px]">
											Bonuses
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LandingLayout>
	);
}

export default Landing;
