import { Expand, ExpandArrayValue } from "../../helpers/Interface.helper";

export enum ExpandActionType {
  SetArray,
  SetArrayIsEnabled,
  SetExpand
}

interface SetArrayAction {
  type: typeof ExpandActionType.SetArray;
  payload: {
    arrayKey: string;
    arrayValue: ExpandArrayValue;
  };
}

interface SetArrayIsEnabledAction {
  type: typeof ExpandActionType.SetArrayIsEnabled;
  payload: {
    arrayKey: string;
    arrayValue: {
      isEnabled: boolean;
    };
  };
}

interface SetExpandAction {
  type: typeof ExpandActionType.SetExpand;
  payload: Expand;
}

export type ExpandAction =
  | SetArrayAction
  | SetArrayIsEnabledAction
  | SetExpandAction;

export interface ExpandState {
  expand?: Expand;
}
