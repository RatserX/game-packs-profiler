import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import environment from "../environment/environment";
import { State } from "./store/Store";
import { setProfile } from "./store/profile/Profile.action";
import { isObjectNullOrEmpty } from "./helpers/Function.helper";
import Layout from "./layout/Layout";

const mapStateToProperties = (state: State) => ({
  profileState: state.profile
});

const mapDispatchToProps = {
  setProfile
};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {};

const AppComponent = (props: Props) => {
  const { profileState, setProfile } = props;

  useEffect(() => {
    if (isObjectNullOrEmpty(profileState)) {
      setProfile("profile.json");
    }
  }, [profileState, setProfile]);

  return <Layout themeType={environment.theme} />;
};

const App = appConnector(AppComponent);

export default App;
