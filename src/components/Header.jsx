import React from "react";
import { TypeAnimation } from "react-type-animation";
import Coffee from "../assets/coffee.svg";

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
						<a href="https://twitter.com/AshtonHeald" rel="noreferrer">
							<i class="fa-brands fa-twitter icon"></i>
						</a>
					</li>
					<li>
						<a href="https://hashnode.com/@AshTheDev" rel="noreferrer">
							<i className="fa-brands fa-hashnode icon"></i>
						</a>
					</li>
					<li>
						<a href="https://www.buymeacoffee.com/ashtonheald" rel="noreferrer">
							<img className="icon" src={Coffee} />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
