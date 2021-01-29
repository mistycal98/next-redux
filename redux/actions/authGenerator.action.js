// Authentication Types...
import { authTypes } from "../constants/authTypes.action";

export const authGenerator = (actionType, payload) => {
	// Action Generators
	switch (actionType) {
		// SIGN UP action generators
		case authTypes.SIGN_UP:
			return;

		// LOG IN action generator
		case authTypes.LOG_IN:
			return {
				type: authTypes.LOG_IN,
				payload: {
					email: "",
					password: "",
				},
			};

		// LOGOUT action generator
		case authTypes.LOGOUT:
			return {
				type: authTypes.LOGOUT,
				payload: { ...payload },
			};

		// Invalid or default action
		default:
			return {
				type: "Invalid Action type",
			};
	}
};
