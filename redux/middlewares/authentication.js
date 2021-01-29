import axios from "axios";

import authApi from "../../endpoints/index";

export const signup = (action, payload) => async (dispatch) => {
	let { BACKEND_BASE_URL, BACKEND_SIGNUP_ENDPOINT } = authApi;

	console.log(payload.user);
	try {
		let { data } = await axios.post(BACKEND_BASE_URL + BACKEND_SIGNUP_ENDPOINT, {
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(payload.user),
			redirect: "follow",
		});
	} catch (error) {
		console.warn(error);
	}
};
