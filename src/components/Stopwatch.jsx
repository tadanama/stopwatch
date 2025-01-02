import React, { useEffect, useState } from "react";
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

		// Remove the interval when Stopwatch unmounts or isRunning state has changed
		return () => {
			clearInterval(interval);
		};
	}, [isRunning]);

	// Start the timer
	function handleStart() {
		setIsRunning(true);
	}

	// Stop the timer
	function handleStop() {
		setIsRunning(false);
	}

	// Format the time state
	function formatTime() {
		const minutes = String(Math.floor(time / 60000)); // Convert time from milliseconds to minutes
		const seconds = String(Math.floor((time % 60000) / 1000)); // Convert the remaining time to seconds
		const milliseconds = String((time % 1000) / 10); // Get the remaining time after converting

		// Return time in the format of <minutes>:<seconds>:<milliseconds>
		return `${prefixZero(minutes)} : ${prefixZero(seconds)} : ${prefixZero(
			milliseconds
		)}`;
	}

	// Padd string with 0 until it reaches the length 2
	function prefixZero(value) {
		return value.padStart(2, "0");
	}

	return (
		<>
			<div className="stopwatch-container">
				<div className="stopwatch">
					<span>{formatTime()}</span>
					<div className="buttons">
						<button className="start" onClick={handleStart}>
							Start timer
						</button>
						<button className="stop" onClick={handleStop}>
							Stop timer
						</button>
						<button
							className="reset"
							onClick={() => {
								setTime(0);
							}}
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stopwatch;
