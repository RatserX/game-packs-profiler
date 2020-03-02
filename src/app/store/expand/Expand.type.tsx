import { Expand, ExpandArrayValue } from "../../helpers/Interface.helper";

export const ExpandActionType = {
  SET_ARRAY: "EXPAND_1",
  SET_ARRAY_IS_ENABLED: "EXPAND_2",
  SET_EXPAND: "EXPAND_3"
};

interface SetArrayAction {
  type: typeof ExpandActionType.SET_ARRAY;
  payload: {
    arrayKey: string;
    arrayValue: ExpandArrayValue;
  };
}

interface SetArrayIsEnabledAction {
  type: typeof ExpandActionType.SET_ARRAY_IS_ENABLED;
  payload: {
    arrayKey: string;
    arrayValue: {
      isEnabled: boolean;
    };
  };
}

interface SetExpandAction {
  type: typeof ExpandActionType.SET_EXPAND;
  payload: Expand;
}

export type ExpandAction =
  | SetArrayAction
  | SetArrayIsEnabledAction
  | SetExpandAction;

export interface ExpandState {
  array: {
    [key: string]: {
      isEnabled: boolean
    }
  }
}

// https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103
