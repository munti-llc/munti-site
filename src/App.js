import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage } from "./pages/Home";
import ScrollToTopRoute from "./ScrollToTopRoute";
import ErrorPage from "./pages/404";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<ScrollToTopRoute
						exact={true}
						path={"/"}
						component={HomePage}
					/>
					<ScrollToTopRoute component={ErrorPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
