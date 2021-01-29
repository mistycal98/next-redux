import axios from "axios";

import authApi from "../../endpoints/index";
import { authTypes } from "../constants/authTypes.action";

export const signup = (action, payload) => async (dispatch) => {
	let { BACKEND_BASE_URL, BACKEND_SIGNUP_ENDPOINT } = authApi;

	// console.log(
	// 	payload,
	// 	JSON.stringify({
	// 		email: payload.user.email,
	// 		password: payload.user.password,
	// 		confirmPassword: payload.user.confirmPassword,
	// 	})
	// );
	try {
		let { data } = await axios(`${BACKEND_BASE_URL}${BACKEND_SIGNUP_ENDPOINT}`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			data: JSON.stringify({
				email: payload.user.email,
				password: payload.user.password,
				confirmPassword: payload.user.confirmPassword,
			}),
			redirect: "follow",
		});
		console.log(data);

		// checking user registered or not
		if (data === "User already Registered") {
			alert("User already Registered");
		} else {
			alert("Registered");
		}

		// return action
		dispatch({
			type: authTypes.SIGN_UP,
			payload: { data },
		});
	} catch (error) {
		console.warn(error);
	}
};
