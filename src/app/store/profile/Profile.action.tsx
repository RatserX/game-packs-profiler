import { ProfileAction, SET_CONFIGURATION, SET_FILEPATH } from "./Profile.type";
import { Configuration } from "../../helpers/Interface.helper";

const setConfiguration = (filepath = "configuration.json"): ProfileAction => {
  const configuration: Configuration = require(`../../files/profile/${filepath}`);

  return {
    type: SET_CONFIGURATION,
    configuration
  };
};

const setFilepath = (filepath: string): ProfileAction => {
  return {
    type: SET_FILEPATH,
    filepath
  };
};

export { setConfiguration, setFilepath };
