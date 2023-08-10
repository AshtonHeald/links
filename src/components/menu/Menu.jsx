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
								Digital Garden <i className="fa-solid fa-seedling icon"></i>
							</a>
						</li>
						<li>
							<a className="button" href="https://ashthe.dev/" rel="noreferrer">
								Web Portfolio <i className="fa-solid fa-code icon"></i>
							</a>
						</li>
						<li>
							<button onClick={flipMenu} className="button">
								<span>Contact</span>
								<i class="fa-regular fa-envelope"></i>
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
