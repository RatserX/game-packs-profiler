import { Profile } from "./Configuration.interface";

export const SET_PROFILE = "CONFIGURATION_1";
export const SET_FILEPATH = "CONFIGURATION_2";

interface SetFilepathAction {
  type: typeof SET_FILEPATH;
  filepath: string;
}

interface SetProfileAction {
  type: typeof SET_PROFILE;
  profile: Profile;
}

export type ConfigurationAction = SetFilepathAction | SetProfileAction;

export interface ConfigurationState {
  filepath: string;
  profile: Profile;
}
