import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export  const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
