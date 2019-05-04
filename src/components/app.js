import { h, render, Component } from "preact";
import { Router } from "preact-router";

import Ethers from "./ethers";
import MyToolbar from "./mytoolbar";

import Home from "./home";
import Profile from "./profile";

class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<MyToolbar />
				<Router onChange={this.handleRoute}>
					<Ethers path="/ethers" />
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}

export default App;
