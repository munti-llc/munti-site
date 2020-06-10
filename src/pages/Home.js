import React, { Component } from "react";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Process from "../components/Process";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import Works from "../components/Works";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Layout from "../components/Layout";

class HomePage extends Component {
	componentDidMount() {
		window.addEventListener("scroll", this.scrollNavigation, true);
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollNavigation);
	}

	render() {
		return (
			<Layout>
				<div className="body_wrapper">
					<Hero id="home" />
					<Process />
					<Services />
					<Stack />
					<Works />
					<Team />
					<Clients />
					<Contact />
				</div>
			</Layout>
		);
	}
}

export default HomePage;
