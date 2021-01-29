import { authTypes } from "../constants/authTypes.action";

const initialState = {
	isLogged: false,
	isRegistered: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
	// Pure Functions
	switch (type) {
		// SIGN IN pure function
		case authTypes.SIGN_UP:
			payload.data.message === "User already Registered" ||
			payload.data.message === "User Created"
				? (state.isLogged = true)
				: null;
			return {
				...state, ...state.isLogged
			};

		// LOG IN pure function
		case authTypes.LOG_IN:
			return {
				...state,
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
