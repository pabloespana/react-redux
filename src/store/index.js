import { createStore, combineReducers } from "redux";
import { countReducer } from "./counter/reducer";

const reducers = combineReducers({
  // All reducers here
  countReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
