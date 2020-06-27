import React, { Component } from "react";
import {
	Route,
	Switch,
	BrowserRouter as Router,
	withRouter,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import ReactGA from "react-ga";
ReactGA.initialize("UA-150731209-5");
ReactGA.pageview("/");

const Landing = React.lazy(() => import("./pages/Home"));
const NoMatch = React.lazy(() => import("./pages/404"));

class App extends Component {
	render() {
		return (
			<React.Fragment>
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
				<Router>
					<React.Suspense fallback={<div></div>}>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route component={NoMatch} />
						</Switch>
					</React.Suspense>
				</Router>
			</React.Fragment>
		);
	}
}

export default withRouter(App);
