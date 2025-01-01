import React from "react";

function Stopwatch() {
	return (
		<>
			<div className="stopwatch-container">
				<div className="stopwatch">
					<span>00 : 00 : 00</span>
					<div className="buttons">
						<button>Start timer</button>
						<button>Stop timer</button>
						<button>Reset</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stopwatch;
