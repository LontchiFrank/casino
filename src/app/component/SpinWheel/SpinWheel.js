/** @format */

"use client";
import React, { useState } from "react";
import "./SpinWheel.css";
import { Wheel } from "react-custom-roulette";

const SpinWheel = () => {
	const data = [
		{ option: "0", style: { backgroundColor: "red", textColor: "black" } },
		{ option: "1", style: { backgroundColor: "blue" } },
		{ option: "2", style: { backgroundColor: "yellow" } },
		{ option: "3", style: { backgroundColor: "green" } },
		{ option: "4", style: { backgroundColor: "orange" } },
		{ option: "5", style: { backgroundColor: "violet" } },
		{ option: "6", style: { backgroundColor: "purple" } },
		{ option: "7", style: { backgroundColor: "brown" } },
	];
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		setMustSpin(true);
	};

	return (
		<>
			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				data={data}
				onStopSpinning={() => {
					setMustSpin(false);
				}}
			/>
			<button className="bg-white" onClick={handleSpinClick}>
				SPIN
			</button>
		</>
	);
};

export default SpinWheel;
