import React from "react";
import { connect } from "react-redux";
import { counterGenerator } from "../redux/actions/counterGenerator.action";
import { counterTypes } from "../redux/constants/counterTypes.action";

const CounterComponent = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Counter {`{start by clicking the buttons}`}</h1>
			<h4>Counter : {props.count}</h4>
			<button onClick={props.increment}>+</button>
			<button onClick={props.decrement}>-</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		count: state.counterReducer.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(counterGenerator(counterTypes.INCREMENT)),
		decrement: () => dispatch(counterGenerator(counterTypes.DECREMENT)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
