import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./counter.reducer";

const rootReducer = combineReducers({
	authReducer,
	counterReducer,
});

export default rootReducer;
