import { ExpandActionType, ExpandAction } from "./Expand.type";
import { Expand, ExpandArrayValue } from "../../helpers/Interface.helper";

const setArray = (
  arrayKey: string,
  arrayValue: ExpandArrayValue
): ExpandAction => {
  return {
    type: ExpandActionType.SET_ARRAY,
    payload: {
      arrayKey,
      arrayValue
    }
  };
};

const setArrayIsEnabled = (
  arrayKey: string,
  isEnabled: boolean
): ExpandAction => {
  console.log("setArrayIsEnabledAction");
  console.log(arrayKey);
  console.log(isEnabled);
  return {
    type: ExpandActionType.SET_ARRAY_IS_ENABLED,
    payload: {
      arrayKey,
      arrayValue: {
        isEnabled
      }
    }
  };
};

const setExpand = (expand: Expand): ExpandAction => {
  console.log("setExpandAction");
  console.log(expand);
  return {
    type: ExpandActionType.SET_EXPAND,
    payload: expand
  };
};

export { setArray, setArrayIsEnabled, setExpand };
