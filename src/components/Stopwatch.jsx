import React from "react";
import "./Stopwatch.css"

function Stopwatch() {
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
