import React, { useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
	// States
	const [time, setTime] = useState(0); // Track the time
	const [isRunning, setIsRunning] = useState(false); // Determine to start the interval or clear

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
