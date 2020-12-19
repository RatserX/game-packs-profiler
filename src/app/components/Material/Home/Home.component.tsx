import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  IconButton,
  Avatar,
  Collapse,
  makeStyles,
  createStyles,
  Theme,
  Divider,
} from "@material-ui/core";
import { Info, ExpandMore, GetApp } from "@material-ui/icons";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Home.style.scss";
import {
  isObjectNullOrEmpty,
  isStringNullOrEmpty,
} from "../../../helpers/Function.helper";
import {
  ProfilePack,
  ProfileServer,
} from "../../../store/configuration/Configuration.interface";
import { State } from "../../../store/Store";
import {
  setInstance,
  setInstanceIsEnabled,
} from "../../../store/expand/Expand.action";
import HomePack from "../HomePack/HomePack.component";
import HomeServer from "../HomeServer/HomeServer.component";

const mapStateToProperties = (state: State) => ({
  configurationState: state.configuration,
  expandState: state.expand,
  locationState: state.location,
});

const mapDispatchToProps = {
  setInstance,
  setInstanceIsEnabled,
};

const homeConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof homeConnector>;

type Props = ConnectorProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    collapse: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expand: {
      transform: "rotate(180deg)",
    },
  })
);

const HomeComponent = (props: Props): JSX.Element => {
  const {
    configurationState,
    expandState,
    locationState,
    setInstance,
    setInstanceIsEnabled,
  } = props;

  const classes = useStyles();

  const instanceKey = "HOME";
  const isEnabled = expandState.instance[instanceKey]?.isEnabled;

  useEffect(() => {
    if (isObjectNullOrEmpty(expandState.instance)) {
      setInstance(instanceKey, {
        isEnabled: false,
      });
    }
  }, [expandState, instanceKey, setInstance, setInstanceIsEnabled]);

  const handleDescriptionExpandClick = () => {
    setInstanceIsEnabled(instanceKey, !isEnabled);
  };

  return (
    <Box className="home">
      <AppBar color="default" position="fixed">
        <Toolbar>
          <Avatar
            src={
              configurationState.profile.game?.image ||
              `${locationState.publicUrl}/images/ph-game.png`
            }
            style={{
              marginRight: "16px",
            }}
            variant="rounded"
          />
          <Grid item zeroMinWidth>
            <Typography noWrap variant="subtitle1">
              {configurationState.profile.game?.name}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {configurationState.profile.game?.version}
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              marginLeft: "auto",
              minWidth: "150px",
              textAlign: "right",
            }}
          >
            <IconButton
              hidden={isStringNullOrEmpty(configurationState.profile.game?.url)}
              href={configurationState.profile.game?.url || "#"}
              target="_blank"
            >
              <Info />
            </IconButton>
            <IconButton
              hidden={isStringNullOrEmpty(
                configurationState.profile.game?.download
              )}
              href={configurationState.profile.game?.download || "#"}
              target="_blank"
            >
              <GetApp />
            </IconButton>
            <IconButton
              hidden={isStringNullOrEmpty(
                configurationState.profile.game?.description
              )}
              className={isEnabled ? classes.expand : classes.collapse}
              onClick={handleDescriptionExpandClick}
            >
              <ExpandMore />
            </IconButton>
          </Grid>
        </Toolbar>
        <Collapse in={isEnabled} timeout="auto" unmountOnExit>
          <Toolbar>
            <Typography component="p" color="textSecondary" variant="body2">
              {configurationState.profile.game?.description}
            </Typography>
          </Toolbar>
        </Collapse>
      </AppBar>
      <Toolbar />
      <Box mt={2}>
        <Typography variant="h6">Packs</Typography>
        <Divider />
      </Box>
      <Grid container>
        {configurationState.profile.packs?.map(
          (value: ProfilePack, index: number) => {
            return <HomePack key={`${index}`} pack={value} />;
          }
        )}
      </Grid>
      <Box mt={2}>
        <Typography variant="h6">Servers</Typography>
        <Divider />
      </Box>
      <Grid container spacing={2}>
        {configurationState.profile.servers?.map(
          (value: ProfileServer, index: number) => {
            return <HomeServer key={`${index}`} server={value} />;
          }
        )}
      </Grid>
      <Box mt={2} />
    </Box>
  );
};

const Home = homeConnector(HomeComponent);

export default Home;
