import React from "react";
import { Row } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../store/Store";
import { ProfilePack } from "../../helpers/Interface.helper";
import HomePack from "../HomePack/HomePack.component";
import "./Home.style.scss";

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
  return (
    <div>
      <Row className="game-container">
        <div>{profileState.profile?.game?.name}</div>
        <div>{profileState.profile?.game?.url}</div>
        <div>{profileState.profile?.game?.version}</div>
      </Row>
      <div>
        {profileState.profile?.packs?.map(
          (value: ProfilePack, index: number, array: ProfilePack[]) => {
            return <HomePack key={`${index}`} pack={value} />;
          }
        )}
      </div>
    </div>
  );
};

const Home = homeConnector(HomeComponent);

export default Home;
