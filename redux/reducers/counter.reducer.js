import { counterTypes } from "../constants/counterTypes.action";

const initialState = {
	count: 0,
};

export const counterReducer = (state = initialState, action) => {
	// Pure Reducer Functions to update Store
	switch (action.type) {
		// Increment count function
		case counterTypes.INCREMENT:
			return { ...state, count: state.count + 1 };

		// Decrement count function
		case counterTypes.DECREMENT:
			return { ...state, count: state.count - 1 };

		// Default for invalid action type
		default:
			return { ...state };
	}
};
