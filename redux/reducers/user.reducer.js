import { userTypes } from "../constants/userTypes.action";

const initialState = {
	users: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.GET_USERS:
			return { ...state, users: [...state.users, payload] };

		default:
			return { ...state };
	}
};
