import { Configuration } from "../../helpers/Interface.helper";

export const SET_CONFIGURATION = "PROFILE_1";
export const SET_FILEPATH = "PROFILE_2";

interface SetFilepathAction {
  type: typeof SET_FILEPATH;
  filepath: string;
}

interface SetConfigurationAction {
  type: typeof SET_CONFIGURATION;
  configuration: Configuration;
}

export type ProfileAction = SetFilepathAction | SetConfigurationAction;

export interface ProfileState {
  filepath: string;
  configuration: Configuration;
}
