import { Profile } from "../../helpers/Interface.helper";

export enum ProfileActionType {
  SetFilepath,
  SetProfile
}

interface SetProfileAction {
  type: "SET_PROFILE";
  payload: Profile;
}

interface SetFilepathAction {
  type: "SET_FILEPATH";
  payload: string;
}

export type ProfileAction = SetProfileAction | SetFilepathAction;

export interface ProfileState {
  profile?: Profile;
}
