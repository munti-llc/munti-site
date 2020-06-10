import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Database from "../Database";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.getElementById("pageLoader").style.display = "block";
		setTimeout(function () {
			document.getElementById("pageLoader").style.display = "none";
		}, 1000);
	}

	render() {
		return (
			<React.Fragment>
				<Navbar
					slogo="sticky_logo"
					mClass="menu_theme"
					nClass="w_menu"
					hbtnClass="main_btn_radius menu_custfive"
				/>
				{this.props.children}
				<Footer Database={Database} />
				<div id="bottomIcon">
					<ScrollUpButton ContainerClassName="back-to-top rounded text-center" />
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(Layout);
