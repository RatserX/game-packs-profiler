import { applyMiddleware, combineReducers, createStore } from "redux";
import Thunk from "redux-thunk";
import ExpandReducer from "./expand/Expand.reducer";
import ProfileReducer from "./profile/Profile.reducer";

const CombinedReducer = combineReducers({
  expand: ExpandReducer,
  profile: ProfileReducer
});

export type State = ReturnType<typeof CombinedReducer>;

export const configureStore = () => {
  const store = createStore(CombinedReducer, applyMiddleware(Thunk));

  return store;
};
