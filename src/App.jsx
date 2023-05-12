import React, { useState } from "react";
import "./App.css";

function App() {
	const [isMonthly, setIsMonthly] = useState(true);
	const [price, setPrice] = useState(isMonthly ? 10 : 100);

	const togglePricing = () => {
		setIsMonthly(!isMonthly);
		setPrice(isMonthly ? 100 : 10);
	};

	return (
		<div className='pricing-container'>
			<div className='pricing-toggle'>
				<label>
					<input
						type='checkbox'
						checked={!isMonthly}
						onChange={togglePricing}
					/>
					<span className='slider round'></span>
				</label>
			</div>
			<div className='pricing-card'>
				<div className='pricing-details'>
					<h2>{isMonthly ? "Monthly" : "Yearly"} Price</h2>
					<p>
						{isMonthly ? "$10" : "$100"} per {isMonthly ? "month" : "year"}
					</p>
				</div>
				<div className='pricing-price'>
					<h1>${price}</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
