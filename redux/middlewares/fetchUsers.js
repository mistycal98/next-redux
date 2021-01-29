import axios from "axios";
import { userTypes } from "../constants/userTypes.action";

const fetchUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => async (dispatch) => {
	try {
		let { data } = await axios.get(fetchUrl);
		// console.log(data);
		dispatch({ type: userTypes.GET_USERS, payload: [...data] });
	} catch (error) {
		console.log(error, error.message);
	}
};

