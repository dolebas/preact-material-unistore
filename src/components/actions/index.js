import store from "../store";

console.log("actions here");

// actions is a function, it gets passed the store:
let actions = store => ({
	// Actions can just return a state update:
	increment(state) {
		return { count: state.count + 1 };
	},

	// The above example as an Arrow Function:
	increment2: ({ count }) => ({ count: count + 1 }),

	// Async actions are actions that call store.setState():
	incrementAsync(state) {
		setTimeout(() => {
			store.setState({ count: state.count + 1 });
		}, 100);
	}
});

export default actions;
