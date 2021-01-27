import { counterTypes } from "../constants/counterTypes.action";

export const counterGenerator = (actionType) => {
	switch (actionType) {
		case counterTypes.INCREMENT:
			return {
				type: counterTypes.INCREMENT,
			};

		case counterTypes.DECREMENT:
			return {
				type: counterTypes.DECREMENT,
			};

		default:
			return {
				type: "Invalid Action Type",
			};
	}
};
