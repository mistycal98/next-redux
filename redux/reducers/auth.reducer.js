import { authTypes } from "../constants/authTypes.action";

const initialState = {
	isLogged: false,
	isRegistered: false,
	jwt: "null",
};

export const authReducer = (state = initialState, { type, payload }) => {
	// Pure Functions
	switch (type) {
		// SIGN IN pure function
		case authTypes.SIGN_UP:
			payload.data.message === "User already Registered" ||
			payload.data.message === "User Created"
				? (state.isRegistered = true)
				: null;
			return {
				...state,
				...state.isRegistered,
			};

		// LOG IN pure function
		case authTypes.LOG_IN:
			console.log(payload);
			payload.data.status === "Sucessfull" ? (state.isLogged = true) : null;
			// console.log(payload.data.data[0].jwt)
			state.jwt = payload.data.data[0].jwt.toString();
			return {
				...state,
				...state.isLogged,
				...state.jwt,
			};

		// LOGOUT pure function
		case authTypes.LOGOUT:
			return {
				...state,
			};

		//Default function
		default:
			return {
				...state,
			};
	}
};
