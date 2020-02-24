import { ProfileState, ProfileAction, ProfileActionType } from "./Profile.type";

const initialState: ProfileState = {};

const ProfileReducer = (
  state: ProfileState = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionType.SetProfile:
      return {
        profile: action.payload
      };
    default:
      return state;
  }
};

export default ProfileReducer;
