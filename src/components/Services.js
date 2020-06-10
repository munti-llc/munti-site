import React from "react";

const Services = () => {
	return (
		<React.Fragment>
			<section
				className="intregration_area bg_color section_pad"
				id="services"
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 d-flex align-items-center">
							<div className="services_content">
								<h2>Our Current Services</h2>
								<p>
									Here is a list of services we currently
									offer. If you do not see a category that
									best fits your current needs, let's talk
									about it and figure it out!
								</p>
								<a
									href="#stack"
									id="tech_use"
									className="main_btn theme_btn"
								>
									Technologies We Use
								</a>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="row services_logo">
								<div className="col-6 services_item">
									<a href=".#" className="services_icon">
										<img
											src={require("../img/services/web.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="col-6 services_item">
									<a href=".#" className="services_icon">
										<img
											src={require("../img/services/mobile.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="col-6 services_item">
									<a href=".#" className="services_icon">
										<img
											src={require("../img/services/systems.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="col-6 services_item">
									<a href=".#" className="services_icon">
										<img
											src={require("../img/services/aiml.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="col-6 services_item">
									<a href=".#" className="services_icon">
										<img
											src={require("../img/services/uiux.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="col-6 services_item">
									<a href=".#" className="services_icon">
										<img
											src={require("../img/services/graphic.png")}
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Services;
