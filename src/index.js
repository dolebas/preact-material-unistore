// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from "preact";

import "preact-material-components/Theme/style.css";
import "./style";

import { Provider } from "unistore/preact";
import store from "./components/store";

let root;
function init() {
	let App = require("./components/app").default;
	root = render(
		<Provider store={store}>
			<App />,
		</Provider>,
		document.body,
		root
	);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === "production") {
	require("./pwa");
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept("./components/app", () => requestAnimationFrame(init));
}

init();
