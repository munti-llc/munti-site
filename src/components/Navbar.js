import React, { Component } from "react";
import { Link } from "react-scroll";
import Sticky from "react-stickynode";

class Navbar extends Component {
	render() {
		var { mClass, nClass, cClass, slogo } = this.props;
		return (
			<Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
				<header className="header_area">
					<nav
						className={`navbar navbar-expand-lg menu_main ${mClass}`}
					>
						<div className={`container ${cClass}`}>
							<a className={`navbar_theme ${slogo}`} href="/">
								<img src={require("../img/logo.png")} alt="" />
								<img
									src={require("../img/logo.png")}
									alt="logo"
								/>
							</a>
							<button
								className="navbar-toggler collapsed"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="menu_toggle">
									<span className="hamburger">
										<span></span>
										<span></span>
										<span></span>
									</span>
									<span className="burger_cross">
										<span></span>
										<span></span>
									</span>
								</span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul
									className={`navbar-nav menu ml-auto ${nClass}`}
								>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="home"
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
										>
											Home
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="process"
											spy={true}
											smooth={true}
											offset={0}
											duration={1000}
										>
											Process
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="services"
											spy={true}
											smooth={true}
											offset={-90}
											duration={1000}
										>
											Services
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="stack"
											spy={true}
											smooth={true}
											offset={0}
											duration={1000}
										>
											Stack
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="works"
											spy={true}
											smooth={true}
											offset={0}
											duration={1000}
										>
											Works
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="team"
											spy={true}
											smooth={true}
											offset={-90}
											duration={1000}
										>
											Team
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="clients"
											spy={true}
											smooth={true}
											offset={-90}
											duration={1000}
										>
											Clients
										</Link>
									</li>
									<li className="nav_item">
										<Link
											className="nav_item"
											activeClass="active"
											to="contact"
											spy={true}
											smooth={true}
											offset={-90}
											duration={1000}
										>
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
			</Sticky>
		);
	}
}

export default Navbar;
