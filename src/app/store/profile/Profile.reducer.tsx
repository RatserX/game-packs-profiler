import {
  ProfileState,
  ProfileAction,
  SET_CONFIGURATION,
  SET_FILEPATH
} from "./Profile.type";

const initialState: ProfileState = {
  configuration: {},
  filepath: "configuration.json"
};

const ProfileReducer = (
  state: ProfileState = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case SET_CONFIGURATION:
      return {
        ...state,
        configuration: action.configuration
      };
    case SET_FILEPATH:
      return {
        ...state,
        filepath: action.filepath
      };
    default:
      return state;
  }
};

export default ProfileReducer;
