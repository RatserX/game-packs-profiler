import {
  ExpandAction,
  SET_INSTANCE,
  SET_INSTANCE_IS_ENABLED
} from "./Expand.type";
import { InstanceValue } from "../../helpers/Interface.helper";

const setInstance = (
  instanceKey: string,
  instanceValue: InstanceValue
): ExpandAction => {
  return {
    type: SET_INSTANCE,
    instanceKey,
    instanceValue
  };
};

const setInstanceIsEnabled = (
  instanceKey: string,
  instanceValueIsEnabled: boolean
): ExpandAction => {
  return {
    type: SET_INSTANCE_IS_ENABLED,
    instanceKey,
    instanceValueIsEnabled
  };
};

export { setInstance, setInstanceIsEnabled };
