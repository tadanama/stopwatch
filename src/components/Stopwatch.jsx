import React, { useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
	// States
	const [time, setTime] = useState(0); // Track the time
	const [isRunning, setIsRunning] = useState(false); // Determine to start the interval or clear

	// Start interval when isRunning is true
	// Stop interval when isRunning is false
	useEffect(() => {
		let interval;

		if (isRunning) {
			// Set an interval that runs a callback function every 10ms
			interval = setInterval(() => {
				// Increment time every 10ms
				setTime((prev) => prev + 10);
			}, 10);
		} else {
			// Stop the interval when is Running is false
			clearInterval(interval);
		}
	}, [isRunning]);

	return (
		<>
			<div className="stopwatch-container">
				<div className="stopwatch">
					<span>00 : 00 : 00</span>
					<div className="buttons">
						<button className="start">Start timer</button>
						<button className="stop">Stop timer</button>
						<button className="reset">Reset</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stopwatch;
