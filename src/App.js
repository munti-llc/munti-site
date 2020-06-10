import React, { Component } from "react";
import {
	Route,
	Switch,
	BrowserRouter as Router,
	withRouter,
} from "react-router-dom";

import Layout from "./components/Layout/";
const Landing = React.lazy(() => import("./pages/Home"));
const NoMatch = React.lazy(() => import("./pages/404"));

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<React.Suspense fallback={<div></div>}>
						<Switch>
							<Layout>
								<Route path="/" component={Landing} />
							</Layout>
							<Layout>
								<Route component={NoMatch} />
							</Layout>
						</Switch>
					</React.Suspense>
				</Router>
			</React.Fragment>
		);
	}
}

export default withRouter(App);
