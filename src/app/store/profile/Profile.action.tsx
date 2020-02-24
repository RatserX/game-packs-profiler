import { ProfileActionType, ProfileAction } from "./Profile.type";
import { Profile } from "../../helpers/Interface.helper";

const setProfile = (filepath = "profile.json"): ProfileAction => {
  const profile: Profile = require(`../../files/profile/${filepath}`);
  
  return {
    type: ProfileActionType.SetProfile,
    payload: profile
  };
};

const setFilepath = (filepath: string): ProfileAction => {
  return {
    type: ProfileActionType.SetFilepath,
    payload: filepath
  };
};

export { setProfile, setFilepath };
