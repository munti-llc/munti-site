import React from "react";
import SectionTitle from "./SectionTitle";
import Fade from "react-reveal/Fade";

const Process = () => {
	return (
		<React.Fragment>
			<section className="seo_process_area section_pad" id="process">
				<div className="container">
					<SectionTitle
						Title="Our Easy Process"
						TitleP="Our process is simple yet also flexible as it takes into account the client's current technical know-how, business-maturity, individual personalities and much more."
						className="wow fadeInUp"
					/>
					<div className="row seo_service_info">
						<Fade bottom duration={500}>
							<div className="col-lg-4 col-md-6">
								<div className="card_item">
									<img
										src={require("../img/process/stepOne.png")}
										alt=""
									/>
									<a href=".#">
										<h4>Introductions & Conversation</h4>
									</a>
									<p>
										Contact us with an intro to your startup
										and what you want made. From there,
										we'll chat about how to make even the
										earliest of ideas into reality.
									</p>
									<a href=".#">
										<i className="arrow_right"></i>
									</a>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={700}>
							<div className="col-lg-4 col-md-6">
								<div className="card_item">
									<img
										src={require("../img/process/stepTwo.png")}
										alt=""
									/>
									<a href=".#">
										<h4>Scouting & Negotiations</h4>
									</a>
									<p>
										With the features, budget, and timeline
										discussed, we'll then scout our company
										for you. Here, the nicer the contract,
										the bigger the talent you can attract!
									</p>
									<a href=".#">
										<i className="arrow_right"></i>
									</a>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={1000}>
							<div className="col-lg-4 col-md-6">
								<div className="card_item">
									<img
										src={require("../img/process/stepThree.png")}
										alt=""
									/>
									<a href=".#">
										<h4>Continued Match-Making</h4>
									</a>
									<p>
										Once you're paired up, rest assured
										they're the best talent given your needs
										and resources. We'll also continually
										reassess this throughout the project.
									</p>
									<a href=".#">
										<i className="arrow_right"></i>
									</a>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Process;
