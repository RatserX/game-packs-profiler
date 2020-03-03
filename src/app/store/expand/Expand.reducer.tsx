import {
  ExpandState,
  ExpandAction,
  SET_INSTANCE,
  SET_INSTANCE_IS_ENABLED
} from "./Expand.type";

const initialState: ExpandState = {
  instance: {}
};

const ExpandReducer = (
  state: ExpandState = initialState,
  action: ExpandAction
): ExpandState => {
  switch (action.type) {
    case SET_INSTANCE:
      return {
        ...state,
        instance: {
          [action.instanceKey]: action.instanceValue
        }
      };
    case SET_INSTANCE_IS_ENABLED:
      return {
        ...state,
        instance: {
          [action.instanceKey]: {
            isEnabled: action.instanceValueIsEnabled
          }
        }
      };
    default:
      return state;
  }
};

export default ExpandReducer;
