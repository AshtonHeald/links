import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = ({ img }) => {
	return (
		<div id="header">
			<img src={img} alt="🧙‍♂️" />
			<h1>Ashton G. Heald</h1>
			<h2>
				I'm a
				<TypeAnimation sequence={["Developer", 2500, "Writer", 3000, "Philosopher", 2500]} wrapper="span" cursor={true} repeat={Infinity} style={{ fontSize: "1em", paddingLeft: "5px" }} />
			</h2>
			<nav>
				<ul>
					<li>
						<a href="https://www.threads.net/@ashton.heald" rel="noreferrer">
							<i class="fa-brands fa-threads"></i>
						</a>
					</li>

					<li>
						<a href="https://twitter.com/AshtonHeald" rel="noreferrer">
							<i class="fa-brands fa-x-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://medium.com/@ashtonheald" rel="noreferrer">
							<i class="fa-brands fa-medium"></i>
						</a>
					</li>
					<li>
						<a href="https://dev.to/ashthedev" rel="noreferrer">
							<i class="fa-brands fa-dev"></i>
						</a>
					</li>
					<li>
						<a href="https://www.buymeacoffee.com/ashtonheald" rel="noreferrer">
							<i class="fa-solid fa-mug-hot"></i>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
