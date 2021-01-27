import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer);

// export default store;

const store = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(store);
