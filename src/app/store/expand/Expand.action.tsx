import { ExpandActionType, ExpandAction } from "./Expand.type";
import { Expand, ExpandArrayValue } from "../../helpers/Interface.helper";

const setArray = (
  arrayKey: string,
  arrayValue: ExpandArrayValue
): ExpandAction => {
  return {
    type: ExpandActionType.SetArray,
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
  return {
    type: ExpandActionType.SetArrayIsEnabled,
    payload: {
      arrayKey,
      arrayValue: {
        isEnabled
      }
    }
  };
};

const setExpand = (expand: Expand): ExpandAction => {
  return {
    type: ExpandActionType.SetExpand,
    payload: expand
  };
};

export { setArray, setArrayIsEnabled, setExpand };
