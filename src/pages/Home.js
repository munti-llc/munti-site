import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Database from "../components/Database";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import Works from "../components/Works";
import Clients from "../components/Clients";
import Services from "../components/Services";

export const HomePage = () => (
	<div className="body_wrapper">
		<Navbar
			slogo="sticky_logo"
			mClass="menu_theme"
			nClass="w_menu"
			hbtnClass="main_btn_radius menu_custfive"
		/>
		<Hero />
		<Process />
		<Services />
		<Stack />
		<Works />
		<Team />
		<Clients />
		<Contact />
		<Footer Database={Database} />
	</div>
);
