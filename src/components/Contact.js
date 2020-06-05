import React, { Component } from "react";

class Contact extends Component {
	render() {
		return (
			<section className="contact_info_area section_pad" id="contact">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="contact_info_item">
								<h6 className="f_paragraph f_size_20 t_color2 f_500 mb_20">
									Office Address
								</h6>
								<p className="f_400 f_size_15">
									1400 E Angela Blvd, South Bend, IN 46617
								</p>
							</div>
							<div className="contact_info_item">
								<h6 className="f_paragraph f_size_20 t_color2 f_500 mb_20">
									Contact Info
								</h6>
								<p className="f_400 f_size_15">
									<span className="f_400 t_color2">
										Phone:
									</span>{" "}
									<a href="tel:8457299718">
										(+1) 845 729-9718
									</a>
								</p>
								<p className="f_400 f_size_15">
									<span className="f_400 t_color2">
										Email:
									</span>{" "}
									<a href="mailto:jbuenvia@nd.edu">
										jbuenvia@nd.edu
									</a>
								</p>
							</div>
						</div>
						<div className="contact_form col-lg-9">
							<h2 className="f_paragraph f_size_22 t_color2 f_600 l_height28 mb_40">
								Leave Us A Message
							</h2>
							<form
								action="https://usebasin.com/f/81059f52b24f"
								className="contact_form_box"
								method="post"
								id="contactForm"
							>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group text_box">
											<input
												type="text"
												id="name"
												name="name"
												placeholder="Your Name"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group text_box">
											<input
												type="text"
												name="email"
												id="email"
												placeholder="Your Email"
											/>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group text_box">
											<input
												type="text"
												id="subject"
												name="subject"
												placeholder="Your Subject"
											/>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group text_box">
											<textarea
												name="message"
												id="message"
												cols="30"
												rows="10"
												placeholder="Your Message"
											></textarea>
										</div>
									</div>
								</div>
								<button
									type="submit"
									className="theme_btn main_btn"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
