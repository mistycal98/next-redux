import React, { useState } from "react";
import { connect } from "react-redux";
import { authGenerator } from "../redux/actions/authGenerator.action";
import { authTypes } from "../redux/constants/authTypes.action";
import { useRouter } from "next/router";

const RegisterFrom = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const router = useRouter();
	// console.log(router);
	const signUp = (event) => {
		event.preventDefault();

		let user = {
			email,
			password,
			confirmPassword,
		};
		return props.signUp(user);
	};

	if (props.state.isRegistered) {
		router.push("/login");
	}

	return (
		<div>
			<h1>RegisterPage</h1>
			<form onSubmit={signUp}>
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
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={confirmPassword}
					onChange={(event) => {
						setConfirmPassword(event.target.value);
					}}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		state: state.authReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (user) => dispatch(authGenerator(authTypes.SIGN_UP, { user })),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFrom);
