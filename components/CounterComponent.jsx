import React from "react";
import { connect } from "react-redux";
import { counterGenerator } from "../redux/actions/counterGenerator.action";
import { counterTypes } from "../redux/constants/counterTypes.action";
import { useRouter } from "next/router";

const CounterComponent = (props) => {
	// console.log(props);
	const router = useRouter();

	if (props.state.isLogged) {
		return (
			<>
				<h1>Counter {`{start by clicking the buttons}`}</h1>
				<h4>Counter : {props.count}</h4>
				<button onClick={props.increment}>+</button>
				<button onClick={props.decrement}>-</button>
			</>
		);
	} else {
		if (process.browser) {
			console.log(router);
			router.push("/login");
		}
		// router.push("/login")
		return <h1>Redirecting</h1>;
	}
};

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		count: state.counterReducer.count,
		state: state.authReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(counterGenerator(counterTypes.INCREMENT)),
		decrement: () => dispatch(counterGenerator(counterTypes.DECREMENT)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
