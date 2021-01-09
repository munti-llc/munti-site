import React, { Component } from "react";
import SectionTitle from "./SectionTitle";

class Clients extends Component {
	render() {
		return (
			<React.Fragment>
				<section
					className="prev_client_logo_area section_pad bg_color"
					id="clients"
				>
					<div className="container">
						<SectionTitle
							Title="Our Past Clients"
							TitleP="We value the connections we have made through freelancing. If you're still not sure about trying us out, check out these great companies and ask for their accounts."
							className="wow fadeInUp"
						/>
						<div className="client_logo_area_spec">
							<div className="row client_info">
								<div className="logo_item">
									<a
										href="https://ideacenter.nd.edu"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/ideaCenter.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://esteem.nd.edu"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/ndEsteem.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://urmaong.com"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/urmaOng.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://joincabinet.com"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/joinCabinet.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://flowaste.com"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/floWaste.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://gittasitta.com"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/gittaSitta.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://delivedrones.com"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/deliveDrones.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://debtly.app/"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/debtlyApp.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://gashawkrv.com"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/gashawkRV.png")}
											alt=""
										/>
									</a>
								</div>
								<div className="logo_item">
									<a
										href="https://tembo.ai"
										target="_BLANK"
										rel="noopener noreferrer"
									>
										<img
											src={require("../img/clients/temboAI.png")}
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Clients;
