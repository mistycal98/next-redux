import { userTypes } from "../constants/userTypes.action";
import { fetchUsers } from "../middlewares/fetchUsers";

export const userGenerators = (action, payload = { users: [] }) => {
	switch (action) {
		case userTypes.GET_USERS:
			return fetchUsers(action, payload);

		default:
			return { type: "Invalid User Types", payload: { ...payload } };
	}
};
