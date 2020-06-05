import React, { Component } from "react";
import Database from "./Database";

class Member extends Component {
	render() {
		var { teamImage, memberN, memberL, memberd } = this.props;
		return (
			<div className="team_item">
				<img src={require("../img/team/" + teamImage)} alt="team" />
				<div className="team_content">
					<a href=".#">
						<h3 className="f_paragraph f_size_16 f_600 t_color2">
							{memberN}
						</h3>
					</a>
				</div>
				<div className="hover_content">
					<div className="desc_hover_content">
						<ul className="list-unstyled">
							{Database[memberL].map((item) => {
								return (
									<li key={item.id}>
										<a href={item.url}>
											<i className={`${item.icon}`}></i>
										</a>
									</li>
								);
							})}
						</ul>
						<div className="nametag"></div>
						<a href=".#">
							<h3 className="f_paragraph f_size_16 f_600 w_color">
								{memberN}
							</h3>
						</a>
						<h5>{memberd}</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Member;
