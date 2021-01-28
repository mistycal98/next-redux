import { authTypes } from "../constants/authTypes.action";

const initialState = {
	isLogged: false,
	isRegistered: false,
};
liahfilh
export const authReducer = (state = initialState, action) => {
	// Pure Functions
	switch (action.type) {
		// SIGN IN pure function
		case authTypes.SIGN_UP:
			return {
				...state,
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
