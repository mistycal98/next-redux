import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./counter.reducer";
import { userReducer } from "./user.reducer";

const rootReducer = combineReducers({
	authReducer,
	counterReducer,
	userReducer,
});

export default rootReducer;
