import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";
import Work from "./Work";
import SectionTitle from "./SectionTitle";

class Works extends Component {
	state = {
		activeItem: "*",
	};

	componentDidMount() {
		var imgLoad = new ImagesLoaded("#work-portfolio");

		imgLoad.on("progress", function (instance, image) {
			this.iso = new Isotope("#work-portfolio", {
				itemSelector: ".work_item",
				layoutMode: "masonry",
			});
		});
	}
	onFilterChange = (newFilter) => {
		this.setState({ activeItem: newFilter });
		if (this.iso === undefined) {
			this.iso = new Isotope("#work-portfolio", {
				itemSelector: ".work_item",
				layoutMode: "masonry",
			});
		}

		// this.iso.arrange({ filter: newFilter });

		if (newFilter === "*") {
			this.iso.arrange({ filter: `*` });
		} else {
			this.iso.arrange({ filter: `.${newFilter}` });
		}
	};

	onActive = (v) => (v === this.state.activeItem ? "active" : "");

	render() {
		return (
			<section className="works_area section_pad bg_color" id="works">
				<div className="container">
					<SectionTitle
						Title="Our Previous Works"
						TitleP="Here's a simple gallery showcasing our completed projects from previous clients. Filter through it if you're looking at a specific category for your needs."
						className="wow fadeInUp"
					/>
					<div id="work_filter" className="work_filter mb_50">
						<div
							data-filter="*"
							className={`gallery_work_item ${this.onActive(
								"*"
							)}`}
							onClick={() => {
								this.onFilterChange("*");
							}}
						>
							All
						</div>
						<div
							data-filter="develop"
							className={`gallery_work_item ${this.onActive(
								"develop"
							)}`}
							onClick={() => {
								this.onFilterChange("develop");
							}}
						>
							Development
						</div>
						<div
							data-filter="design"
							className={`gallery_work_item ${this.onActive(
								"design"
							)}`}
							onClick={() => {
								this.onFilterChange("design");
							}}
						>
							Design
						</div>
						<div
							data-filter="web"
							className={`gallery_work_item ${this.onActive(
								"web"
							)}`}
							onClick={() => {
								this.onFilterChange("web");
							}}
						>
							Web
						</div>
						<div
							data-filter="mobile"
							className={`gallery_work_item ${this.onActive(
								"mobile"
							)}`}
							onClick={() => {
								this.onFilterChange("mobile");
							}}
						>
							Mobile
						</div>
						<div
							data-filter="systems"
							className={`gallery_work_item ${this.onActive(
								"systems"
							)}`}
							onClick={() => {
								this.onFilterChange("systems");
							}}
						>
							Systems
						</div>
						<div
							data-filter="ux"
							className={`gallery_work_item ${this.onActive(
								"ux"
							)}`}
							onClick={() => {
								this.onFilterChange("ux");
							}}
						>
							UI/UX
						</div>
						<div
							data-filter="graphic"
							className={`gallery_work_item ${this.onActive(
								"graphic"
							)}`}
							onClick={() => {
								this.onFilterChange("graphic");
							}}
						>
							Graphic
						</div>
					</div>
					<div className="row work_gallery mb_30" id="work-portfolio">
						<Work
							colClass="col-lg-4 col-sm-6 web develop design ux"
							pImg="gashawkSite.jpg"
							ptitle="Gäshawk Website"
							tOne="Gäshawk Inc."
							tTwo="https://gashawkrv.com"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 web develop design ux"
							pImg="deliveSite.jpg"
							ptitle="DeLive Website"
							tOne="DeLive Aerial System, LLC"
							tTwo="https://delivedrones.com"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 web develop design ux"
							pImg="temboSite.jpg"
							ptitle="Tembo Website"
							tOne="Tembo AI, LLC"
							tTwo="https://tembo.ai"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 mobile develop design ux"
							pImg="temboApp.jpg"
							ptitle="Tembo App"
							tOne="Tembo AI, LLC"
							tTwo="https://tembo.ai"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 web systems develop"
							pImg="deliveDrone.jpg"
							ptitle="DeLive Drone"
							tOne="DeLive Aerial System, LLC"
							tTwo="https://delivedrones.com"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 design graphic"
							pImg="aristotleOne.jpg"
							ptitle="Aristotle's Card Designs #1"
							tOne="Aristotle's Elements & Space"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 design graphic"
							pImg="aristotleTwo.jpg"
							ptitle="Aristotle's Card Designs #2"
							tOne="Aristotle's Elements & Space"
						/>
						<Work
							colClass="col-lg-4 col-sm-6 design graphic"
							pImg="aristotleThree.jpg"
							ptitle="Aristotle's Card Designs #3"
							tOne="Aristotle's Elements & Space"
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default Works;
