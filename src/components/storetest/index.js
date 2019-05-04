// import { h } from "preact";
import { h, Component } from "preact";
import { Link } from "preact-router";
import { connect } from "unistore/preact";
import { actions } from "../store";

const App2 = connect(
	"count",
	actions
)(
	class Storetest extends Component {
		render({ count }) {
			return (
				<div id="app">
					<p>Count: {count}</p>
					<button onClick={increment}>Increment</button>
				</div>
			);
		}
	}
);

export default App2;

// export default connect(
// 	"count",
// 	actions
// )(({ count, increment }) => (
// 	<div>
// 		<p>Count: {count}</p>
// 		<button onClick={increment}>Increment</button>
// 		<Link href="/about"> About Me! </Link>
// 	</div>
// ));
