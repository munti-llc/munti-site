import React from "react";
import Reveal from "react-reveal/";

const Hero = () => {
	return (
		<section className="hero_banner_area" id="home">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<Reveal bottom cascade duration={1100}>
							<div className="hero_content">
								<h2>
									A design and development team for{" "}
									<span>your</span> startup
								</h2>
								<p>
									We are a student-run freelance company
									specializing in pairing the right talent for
									the right job. Want something made? We'd
									love to hear all about it!
								</p>
								<a
									href="#works"
									id="banner_btn"
									className="main_btn theme_btn"
								>
									Our Projects
								</a>
								<a
									href="#contact"
									className="main_btn theme_btn"
								>
									Contact Us
								</a>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
			<div className="hero_splash_graphic">
				<Reveal effect="slideInnew">
					<img
						className="phone"
						src={require("../img/home/mobileTemplate.png")}
						alt=""
					/>
				</Reveal>
				<Reveal effect="slideInnew">
					<img
						className="laptop"
						src={require("../img/home/webTemplate.png")}
						alt=""
					/>
				</Reveal>
			</div>
		</section>
	);
};

export default Hero;
