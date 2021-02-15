import React, { Component } from "react";

class Footer extends Component {
	render() {
		var { fClass } = this.props;
		let Database = this.props.Database;
		return (
			<footer className={`footer_area footer_area_main f_bg ${fClass}`}>
				<div className="footer_bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-5 col-sm-6">
								<p className="mb-0 f_400">
									Copyright © {new Date().getFullYear()} Munti
									LLC. All rights reserved.
								</p>
							</div>
							<div className="col-lg-4 col-md-3 col-sm-6"></div>
							<div className="col-lg-4 col-md-4 col-sm-12">
								<div className="f_social_icon_main text-right">
									{Database.socialIcon.map((item) => {
										return (
											<a href={item.url} key={item.id}>
												<i className={item.icon}></i>
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
