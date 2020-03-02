import { ExpandState, ExpandAction, ExpandActionType } from "./Expand.type";

const initialState: ExpandState = {};

const ExpandReducer = (
  state: ExpandState = initialState,
  action: ExpandAction
): ExpandState => {
  switch (action.type) {
    case ExpandActionType.SetArray:
      return {
        expand: {
          array: {
            [action.payload.arrayKey]: action.payload.arrayValue,
            ...state.expand?.array
          }
        }
      };
    case ExpandActionType.SetArrayIsEnabled:
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
    case ExpandActionType.SetExpand:
      return {
        expand: action.payload
      };
    default:
      return state;
  }
};

export default ExpandReducer;
