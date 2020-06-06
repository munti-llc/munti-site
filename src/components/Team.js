import React from "react";
import SectionTitle from "./SectionTitle";
import Member from "./Member";

const Team = () => {
	return (
		<section className="experts_team_area section_pad" id="team">
			<div className="container">
				<SectionTitle
					Title="Our Skilled Team"
					TitleP="We are a group of driven Notre Dame students. If you're looking for a specific set of skills or someone with experience in your industry, check out our individual socials."
					className="wow fadeInUp"
				/>
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<Member
							teamImage="jioBuenviaje.jpg"
							memberN="Jio Buenviaje"
							memberd="Founder, Fullstack Web & Mobile Developer, UI/UX Designer"
							memberL="jioSocials"
						/>
					</div>
					<div className="col-lg-3 col-sm-6">
						<Member
							teamImage="zachSy.jpg"
							memberN="Zachary Sy"
							memberd="Co-Founder, Native iOS & Web Backend Developer"
							memberL="zachSocials"
						/>
					</div>
					<div className="col-lg-3 col-sm-6">
						<Member
							teamImage="alenaHuang.jpg"
							memberN="Alena Huang"
							memberd="UI/UX & Graphic Designer"
							memberL="alenaSocials"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
