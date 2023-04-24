import React, { useEffect, useRef } from "react";
import Logo1 from "../../assets/Logo-ASAN.png";
import Logo2 from "../../assets/Logo-Shriners.png";
import Logo3 from "../../assets/Logo-DSA.png";

const Carousel = () => {
	const slideIndex = useRef(1);
	const timer = useRef();

	useEffect(() => {
		showSlides(slideIndex.current);
		timer.current = setInterval(() => plusSlides(1), 4000);
		return () => clearInterval(timer.current);
	}, []);

	const showSlides = n => {
		const slides = document.querySelectorAll(".mySlides");
		if (n > slides.length) slideIndex.current = 1;
		if (n < 1) slideIndex.current = slides.length;
		slides.forEach(slide => (slide.style.display = "none"));
		slides[slideIndex.current - 1].style.display = "grid";
	};

	const plusSlides = n => {
		clearInterval(timer.current);
		slideIndex.current += n;
		showSlides(slideIndex.current);
		timer.current = setInterval(() => plusSlides(1), 4000);
	};

	const pause = () => clearInterval(timer.current);
	const resume = () => {
		clearInterval(timer.current);
		timer.current = setInterval(() => plusSlides(slideIndex.current), 4000);
	};

	return (
		<div className="slideshow-container" onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
			<button className="prev sm-button" onClick={() => plusSlides(-1)}>
				&#10094;
			</button>

			<div className="mySlides">
				<a className="button" href="https://autisticadvocacy.org/" target="_blank">
					<img src={Logo1} alt="" />
					<span>Autism</span>
				</a>
			</div>
			<div className="mySlides">
				<a className="button" href="https://www.shrinerschildrens.org/" target="_blank">
					<img src={Logo2} alt="" />
					<span>Shriners</span>
				</a>
			</div>
			<div className="mySlides">
				<a className="button" href="https://www.dsausa.org/" target="_blank">
					<img src={Logo3} alt="" />
					<span>Socialism</span>
				</a>
			</div>
			<button className="next sm-button" onClick={() => plusSlides(1)}>
				&#10095;
			</button>
		</div>
	);
};

export default Carousel;
