import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import environment from "../environment/environment";
import { State } from "./store/Store";
import { setProfile } from "./store/configuration/Configuration.action";
import { setPublicUrl } from "./store/location/Location.action";
import {
  isObjectNullOrEmpty,
  isStringNullOrEmpty,
} from "./helpers/Function.helper";
import Layout from "./layout/Layout";

const mapStateToProperties = (state: State) => ({
  configurationState: state.configuration,
  locationState: state.location,
});

const mapDispatchToProps = {
  setProfile,
  setPublicUrl,
};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps;

const AppComponent = (props: Props) => {
  const { configurationState, locationState, setProfile, setPublicUrl } = props;

  useEffect(() => {
    if (isObjectNullOrEmpty(configurationState.profile)) {
      setProfile("profile.json");
    }

    if (isStringNullOrEmpty(locationState.publicUrl)) {
      setPublicUrl(window.location.href);
    }
  }, [configurationState, locationState, setProfile, setPublicUrl]);
  return <Layout themeType={environment.theme} />;
};

const App = appConnector(AppComponent);

export default App;
