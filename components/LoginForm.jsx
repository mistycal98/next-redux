import React, { useState } from "react";
import { connect } from "react-redux";
import { authGenerator } from "../redux/actions/authGenerator.action";
import { authTypes } from "../redux/constants/authTypes.action";
import { useRouter } from "next/router";
import Cookies from "js-cookie"

const LoginForm = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();
	const login = (event) => {
		event.preventDefault();
		let user = { email, password };
		// console.log("login");
		return props.login(user);
	};

	if (props.state.isLogged && props.state.jwt.length > 4) {
		Cookies.set("jwt", props.state.jwt);
		router.push("/counter");
	}

	return (
		<div>
			<h1>Login Form</h1>
			<form onSubmit={login}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	state: state.authReducer,
});

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => dispatch(authGenerator(authTypes.LOG_IN, { user })),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
