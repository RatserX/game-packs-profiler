import { AppBar, Toolbar, Typography, Box, Grid, Card, CardHeader, IconButton, CardContent, Paper } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../../store/Store";
import { ConfigurationPack } from "../../../helpers/Interface.helper";
import HomePack from "../HomePack/HomePack.component";
import "./Home.style.scss";
import { Info } from "@material-ui/icons";

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
      <Box mt={2}>
        <Paper elevation={3} square variant="elevation">
          <CardHeader
            action={
              <IconButton href={profileState.configuration.game?.url || "#"} target="_blank">
                <Info />
              </IconButton>
            }
            subheader={profileState.configuration.game?.version}
            subheaderTypographyProps={{
              variant: "body2"
            }}
            title={profileState.configuration.game?.name}
            titleTypographyProps={{
              variant: "body2"
            }}
          />
          <CardContent>
            <Typography>{profileState.configuration.game?.name}</Typography>
          </CardContent>
        </Paper>
      </Box>
      <div>
        {profileState.configuration.packs?.map(
          (
            value: ConfigurationPack,
            index: number,
            array: ConfigurationPack[]
          ) => {
            return <HomePack key={`${index}`} pack={value} />;
          }
        )}
      </div>
    </div>
  );
};

const Home = homeConnector(HomeComponent);

export default Home;
