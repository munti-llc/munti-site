import React, { Component } from "react";
import Layout from "../components/Layout/";

class ErrorPage extends Component {
	componentDidMount() {
		window.addEventListener("scroll", this.scrollNavigation, true);
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollNavigation);
	}

	render() {
		return (
			<div className="body_wrapper">
				<Layout>
					<section className="error_main_area">
						<div className="container flex">
							<div className="error_main_content text-center">
								<img
									src={require("../img/home/error.png")}
									alt=""
								/>
								<h2>
									Oops, we cannot seem to find what you're
									looking for.
								</h2>
								<p>Kindly try again later or return home.</p>
								<a href="/" className="theme_btn main_btn">
									Back Home
								</a>
							</div>
						</div>
					</section>
				</Layout>
			</div>
		);
	}
}

export default ErrorPage;
