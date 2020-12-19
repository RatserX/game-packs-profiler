import { Instance, InstanceValue } from "./Expand.interface";

export const SET_INSTANCE = "EXPAND_1";
export const SET_INSTANCE_IS_ENABLED = "EXPAND_2";

interface SetInstanceAction {
  type: typeof SET_INSTANCE;
  instanceKey: string;
  instanceValue: InstanceValue;
}

interface SetInstanceIsEnabledAction {
  type: typeof SET_INSTANCE_IS_ENABLED;
  instanceKey: string;
  instanceValueIsEnabled: boolean;
}

export type ExpandAction = SetInstanceAction | SetInstanceIsEnabledAction;

export interface ExpandState {
  instance: Instance;
}

// https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103
