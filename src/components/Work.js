import React, { Component } from "react";

class Work extends Component {
	render() {
		var { pImg, ptitle, tOne, tTwo, colClass } = this.props;
		return (
			<div className={`work_item mb-30 ${colClass} `}>
				<div className="work_img">
					<img src={require("../img/works/" + pImg)} alt="" />
					<div className="hover_content">
						<a href={tTwo} className="img_popup leaf">
							<i className="ti-arrow-right"></i>
						</a>
						<div className="work_item_desc leaf">
							<a href={tTwo} className="work_item_title">
								<h3 className="f_500 f_size_20 f_paragraph">
									{ptitle}
								</h3>
							</a>
							<div className="links">
								<a href={tTwo}>{tOne}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Work;
