import { Profile } from "../../helpers/Interface.helper";

export enum ProfileActionType {
  SetFilepath,
  SetProfile
}

interface SetProfileAction {
  type: typeof ProfileActionType.SetProfile;
  payload: Profile;
}

interface SetFilepathAction {
  type: typeof ProfileActionType.SetFilepath;
  payload: string;
}

export type ProfileAction = SetProfileAction | SetFilepathAction;

export interface ProfileState {
  profile?: Profile;
}
