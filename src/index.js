import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { Helmet } from "react-helmet";

import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";

const app = (
	<BrowserRouter>
		<Helmet>
			<meta charset="utf-8" />
			<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
			<title>Munti</title>
			<meta name="author" content="Jio Buenviaje" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Munti" />
			<meta property="og:title" content="Munti" />
			<meta
				name="image"
				property="og:image"
				content="https://user-images.githubusercontent.com/50670255/85933118-5e538a00-b8a1-11ea-980e-cfbcd586ff65.png"
			/>
			<meta
				property="og:description"
				content="Munti is a student-run freelance company centered at the University of Notre Dame specializing in producing MVPs for startups."
			/>
			<meta property="og:url" content="munti.io" />
			<meta name="theme-color" content="#f96e65" />
			<meta property="twitter:url" content="munti.io" />
			<meta property="twitter:title" content="Munti" />
			<meta
				name="description"
				content="Munti is a student-run freelance company centered at the University of Notre Dame specializing in producing MVPs for startups."
			/>
			<meta
				property="twitter:description"
				content="Munti is a student-run freelance company centered at the University of Notre Dame specializing in producing MVPs for startups."
			/>
			<meta
				name="keywords"
				content="munti,muntillc,freelance,muntiio,student,software,design,development,studentdev,student-run,studentdesign,ndstudent,ndcomputerscience,ndcs,ndcompsci,ndcomsci,nddesign,ndvisualdesign,notredame,notre,dame,nd,southbend,indiana,mccloskey,mccloskeynewventure,mccloskeynewventurecompetition,susbe,elkhart,ideacenter,ndideacenter,innovationpark,ndip,ndic,studentfreelance,freelancecompany"
			/>
			<meta
				property="twitter:image"
				content="https://user-images.githubusercontent.com/50670255/84215968-0f7eb580-aa96-11ea-91fd-0fda9b14acb5.png"
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<link rel="canonical" href="https://munti.io/" />
		</Helmet>
		<App />
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
