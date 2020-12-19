import {
  ConfigurationState,
  ConfigurationAction,
  SET_FILEPATH,
  SET_PROFILE,
} from "./Configuration.type";

const initialState: ConfigurationState = {
  filepath: "configuration.json",
  profile: {},
};

const ConfigurationReducer = (
  state: ConfigurationState = initialState,
  action: ConfigurationAction
): ConfigurationState => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_FILEPATH:
      return {
        ...state,
        filepath: action.filepath,
      };
    default:
      return state;
  }
};

export default ConfigurationReducer;
