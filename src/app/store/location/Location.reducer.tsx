import { LocationState, LocationAction, SET_PUBLIC_URL } from "./Location.type";

const initialState: LocationState = {
  publicUrl: "",
};

const ExpandReducer = (
  state: LocationState = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case SET_PUBLIC_URL:
      return {
        ...state,
        publicUrl: action.publicUrl,
      };
    default:
      return state;
  }
};

export default ExpandReducer;
