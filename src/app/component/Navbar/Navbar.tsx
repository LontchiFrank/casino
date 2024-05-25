/** @format */

import React from "react";
import { Pacifico } from "next/font/google";
import { ImClubs } from "react-icons/im";

const pacifico = Pacifico({
	subsets: ["latin"],
	weight: ["400"],
});

function Navbar() {
	return (
		<nav className="  bg-[#29074b] dark:border-gray-700 ">
			<div className="container px-10 flex flex-wrap items-center justify-between mx-auto p-4 ">
				<a href="#" className="flex items-center ">
					<span className="text-[#f92e78] text-[20px] pr-1 ">
						<ImClubs />
					</span>
					<span
						className={`  text-3xl font-semibold  text-[#fff] ${pacifico.className}`}>
						Casino
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-solid-bg"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-solid-bg"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
					<ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
						<li>
							<a
								href="#"
								className="block py-2 px-3 md:p-0 text-white bg-[#f92e78] rounded md:bg-transparent md:text-[#f92e78]"
								aria-current="page">
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f92e78] text-white ">
								Services
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f92e78] text-white ">
								Pricing
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f92e78] text-white ">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
