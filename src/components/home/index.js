import { h, Component } from "preact";

import { connect } from "unistore/preact";
import store from "../store";
import actions from "../actions";

import Dialog from "preact-material-components/Dialog";
import "preact-material-components/Dialog/style.css";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";

import Icon from "preact-material-components/Icon";
import "preact-material-components/Icon/style.css";

import style from "./style.less";

store.subscribe(state => console.log(state));
store.setState({ a: "b" }); // logs { a: 'b' }
store.setState({ c: "d" }); // logs { a: 'b', c: 'd' }

class Home extends Component {
	render({ count, increment }) {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<div>
					<p>Count: {count}</p>
					<button onClick={increment}>Increment</button>
				</div>
				<TextField
					label="State"
					value={this.state.value}
					onInput={e => this.setState({ value: e.target.value })}
				/>
				<p>State: {this.state.value}</p>
				<p>
					<Icon>add_circle</Icon>
				</p>
				{/* <div class="my-dialog-button"> */}
				<Button
					primary={true}
					raised={true}
					onClick={() => {
						this.scrollingDlg.MDComponent.show();
					}}>
					Show Scrollable Dialog
				</Button>
				<Dialog
					ref={scrollingDlg => {
						this.scrollingDlg = scrollingDlg;
					}}>
					<Dialog.Header>Scroll for me ;)</Dialog.Header>
					<Dialog.Body scrollable={true}>
						<List>
							<List.Item>Item 1</List.Item>
							<List.Item>Item 2</List.Item>
							<List.Item>Item 3</List.Item>
							<List.Item>Item 4</List.Item>
							<List.Item>Item 5</List.Item>
						</List>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
						<Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
				{/* </div> */}
			</div>
		);
	}
}

export default connect(
	"count",
	actions
)(Home);
