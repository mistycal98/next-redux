import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import rootReducer from "../reducers/root.reducer";

// const store = createStore(rootReducer);

// export default store;
const store = () => createStore(rootReducer);

export const wrapper = createWrapper(store);
