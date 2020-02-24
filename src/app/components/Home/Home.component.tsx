import React from "react";
import { State } from "../../store/Store";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProperties = (state: State) => ({
  profileState: state.profile
});

const homeConnector = connect(mapStateToProperties);

type ConnectorProps = ConnectedProps<typeof homeConnector>;

type Props = ConnectorProps & {};

const HomeComponent = (props: Props) => {
  const { profileState } = props;

  console.log("were home");
  console.log(profileState);
  return <div>home</div>;
};

const Home = homeConnector(HomeComponent);

export default Home;
