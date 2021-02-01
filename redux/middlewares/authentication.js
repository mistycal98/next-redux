import axios from "axios";
import authApi from "../../endpoints/index";
import { authTypes } from "../constants/authTypes.action";

let { BACKEND_BASE_URL, BACKEND_SIGNUP_ENDPOINT, BACKEND_LOGIN_ENDPOINT } = authApi;

export const signup = (action, payload) => async (dispatch) => {
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
		if (data.message === "User already Registered") {
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

export const login = (action, payload) => async (dispatch) => {
	try {
		let { data } = await axios(`${BACKEND_BASE_URL}${BACKEND_LOGIN_ENDPOINT}`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			data: JSON.stringify({
				email: payload.user.email,
				password: payload.user.password,
			}),
		});
		console.log(data);
		
		dispatch({
			type: authTypes.LOG_IN,
			payload: { data },
		});
	} catch (err) {
		console.warn(err);
	}
};
