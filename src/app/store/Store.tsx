import { applyMiddleware, combineReducers, createStore } from "redux";
import Thunk from "redux-thunk";
import ProfileReducer from "./profile/Profile.reducer";

const CombinedReducer = combineReducers({
  profile: ProfileReducer
});

export type State = ReturnType<typeof CombinedReducer>;

export const configureStore = () => {
  const store = createStore(CombinedReducer, applyMiddleware(Thunk));

  return store;
};
