import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../../store/Store";
import { ProfilePack } from "../../../helpers/Interface.helper";
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

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>{profileState.profile?.game?.name}</Typography>
          <Typography>{profileState.profile?.game?.url}</Typography>
          <Typography>{profileState.profile?.game?.version}</Typography>
        </Toolbar>
      </AppBar>
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
