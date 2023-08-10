import React from "react";
import Contact from "./Contact";

import { useState } from "react";

const Menu = () => {
	const [flipped, setFlipped] = useState(false);

	const flipMenu = () => {
		setFlipped(!flipped);
	};
	return (
		<div className={`${flipped ? "flip" : ""}`} id="menu">
			<div className="front">
				<nav>
					<ul>
						<li>
							<a className="button" href="https://ash.cafe/" rel="noreferrer">
								Digital Garden
							</a>
						</li>
						<li>
							<a className="button" href="https://ashthe.dev/" rel="noreferrer">
								Web Portfolio
							</a>
						</li>
						<li>
							<button onClick={flipMenu} className="button">
								<span>Contact</span>
							</button>
						</li>
					</ul>
				</nav>
			</div>
			<div className="back">
				<div className="contact">
					<h3>Contact</h3>
					<button onClick={flipMenu}>x</button>
				</div>
				<Contact />
			</div>
		</div>
	);
};

export default Menu;
