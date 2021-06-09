import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import todosReducer from "./reducers/todosReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    postsReducer,
    todosReducer,
});

export default createStore(rootReducer, composeWithDevTools());