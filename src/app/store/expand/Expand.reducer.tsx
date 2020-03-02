import { ExpandState, ExpandAction, ExpandActionType } from "./Expand.type";

const initialState: ExpandState = {
  array: {}
};

const ExpandReducer = (
  state: ExpandState = initialState,
  action: ExpandAction
): ExpandState => {
  switch (action.type) {
    case ExpandActionType.SET_ARRAY:
      return {
        array: {
          [action.payload.arrayKey]: action.payload.arrayValue
        },
        ...state
      };
    case ExpandActionType.SET_ARRAY_IS_ENABLED:
      console.log("setArrayIsEnabledReducer");
      console.log({
        expand: {
          array: {
            [action.payload.arrayKey]: {
              isEnabled: action.payload.arrayValue?.isEnabled
            },
            ...state.expand?.array
          }
        }
      });
      console.log(action.payload);
      console.log(state.expand);
      return {
        expand: {
          array: {
            [action.payload.arrayKey]: {
              isEnabled: action.payload.arrayValue?.isEnabled
            },
            ...state.expand?.array
          }
        }
      };
    case ExpandActionType.SET_EXPAND:
      console.log("setExpandReducer");
      console.log(action.payload);
      return {
        expand: action.payload
      };
    default:
      return state;
  }
};

export default ExpandReducer;
