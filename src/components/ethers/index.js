import { h, Component } from "preact";
import { ethers } from "ethers";

import { connect } from "unistore/preact";
import store from "../store";
import actions from "../actions";

import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";

import style from "./style.less";

let abi = [
	{
		constant: false,
		inputs: [
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "set",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "get",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

let provider = new ethers.providers.Web3Provider(web3.currentProvider);
let contractAddress = "0x2f2e21447211f3047833b028BB0eeA1E4AC0C20f";
let contract = new ethers.Contract(contractAddress, abi, provider);
let contractRW = contract.connect(provider.getSigner());

class Ethers extends Component {
	componentDidMount() {
		let time = new Date().toLocaleString();
		this.setState({ time });
		// contractRW.set(5).then(function(transaction) {
		// 	console.log(transaction);
		// });
		contract.get().then(myvalue => {
			let cvalue = myvalue.toNumber(myvalue._hex);
			console.log(cvalue);
			this.setState({ cvalue });
		});
		contract.get().then(myvalue => {
			let cvalue2 = myvalue.toNumber(myvalue._hex);
			console.log(cvalue2);
			store.setState({ count2: cvalue2 });
		});
	}
	render({ count, increment, count2 }) {
		let cvalue = this.state.cvalue;

		return (
			<div>
				<div>
					<p>Count: {count}</p>
					<button onClick={increment}>Increment</button>
				</div>
				<p>
					<div>ethers {cvalue}</div>
				</p>
				<p>
					<TextField
						label="State"
						value={count2}
						onInput={e => store.setState({ count2: e.target.value })}
					/>
					<p>
						<Button
							primary={true}
							raised={true}
							onClick={() => {
								contractRW.set(count2).then(function(transaction) {
									console.log(transaction);
								});
							}}>
							Transmit
						</Button>
					</p>
				</p>
			</div>
		);
	}
}

// store.setState({ a: "b" }); // logs { a: 'b' }

export default connect(
	"count,count2",
	actions
)(Ethers);
