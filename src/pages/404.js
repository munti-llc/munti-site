import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Database from "../components/Database";

const ErrorPage = () => (
	<div className="body_wrapper">
		<Navbar hbtnClass="new_btn" />
		<section className="error_main_area">
			<div className="container flex">
				<div className="error_main_content text-center">
					<img src={require("../img/home/error.png")} alt="" />
					<h2>
						Oops, we cannot seem to find what you're looking for.
					</h2>
					<p>Kindly try again later or return home.</p>
					<a href="/" className="theme_btn main_btn">
						Back Home
					</a>
				</div>
			</div>
		</section>
		<Footer Database={Database} />
	</div>
);

export default ErrorPage;
