import { applyMiddleware, combineReducers, createStore } from "redux";
import Thunk from "redux-thunk";
import ConfigurationReducer from "./configuration/Configuration.reducer";
import ExpandReducer from "./expand/Expand.reducer";
import LocationReducer from "./location/Location.reducer";

const CombinedReducer = combineReducers({
  configuration: ConfigurationReducer,
  expand: ExpandReducer,
  location: LocationReducer,
});

export type State = ReturnType<typeof CombinedReducer>;

export const configureStore = () => {
  const store = createStore(CombinedReducer, applyMiddleware(Thunk));

  return store;
};
