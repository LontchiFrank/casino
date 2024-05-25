/** @format */

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function LandingLayout({ children }: any) {
	return (
		<div className="w-full h-screen">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default LandingLayout;
