import { Profile } from "./Configuration.interface";
import {
  ConfigurationAction,
  SET_FILEPATH,
  SET_PROFILE,
} from "./Configuration.type";

const setProfile = (filePath = "profile.json"): ConfigurationAction => {
  const profile: Profile = require(`../../files/configuration/${filePath}`);

  return {
    type: SET_PROFILE,
    profile,
  };
};

const setFilepath = (filepath: string): ConfigurationAction => {
  return {
    type: SET_FILEPATH,
    filepath,
  };
};

export { setProfile, setFilepath };
