import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import environment from "../environment/environment";
import { State } from "./store/Store";
import { setConfiguration } from "./store/profile/Profile.action";
import { isObjectNullOrEmpty } from "./helpers/Function.helper";
import Layout from "./layout/Layout";

const mapStateToProperties = (state: State) => ({
  profileState: state.profile
});

const mapDispatchToProps = {
  setConfiguration
};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {};

const AppComponent = (props: Props) => {
  const { profileState, setConfiguration } = props;

  useEffect(() => {
    if (isObjectNullOrEmpty(profileState.configuration)) {
      setConfiguration("configuration.json");
    }
  }, [profileState, setConfiguration]);

  return <Layout themeType={environment.theme} />;
};

const App = appConnector(AppComponent);

export default App;
