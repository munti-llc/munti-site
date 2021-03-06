import React, { Component } from "react";
import {
	Route,
	Switch,
	BrowserRouter as Router,
	withRouter,
} from "react-router-dom";

import ReactGA from "react-ga";
ReactGA.initialize("UA-150731209-5");
ReactGA.pageview("/");

const Landing = React.lazy(() => import("./pages/Home"));
const NoMatch = React.lazy(() => import("./pages/404"));

class App extends Component {
	render() {
		return (
			<React.Fragment>
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
