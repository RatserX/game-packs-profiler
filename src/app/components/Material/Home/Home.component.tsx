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
  Divider
} from "@material-ui/core";
import { Info, ExpandMore } from "@material-ui/icons";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Home.style.scss";
import { isObjectNullOrEmpty } from "../../../helpers/Function.helper";
import {
  ConfigurationPack,
  ConfigurationServer
} from "../../../helpers/Interface.helper";
import { State } from "../../../store/Store";
import {
  setInstance,
  setInstanceIsEnabled
} from "../../../store/expand/Expand.action";
import HomePack from "../HomePack/HomePack.component";
import HomeServer from "../HomeServer/HomeServer.component";

const mapStateToProperties = (state: State) => ({
  expandState: state.expand,
  profileState: state.profile
});

const mapDispatchToProps = {
  setInstance,
  setInstanceIsEnabled
};

const homeConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof homeConnector>;

type Props = ConnectorProps & {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    collapse: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expand: {
      transform: "rotate(180deg)"
    }
  })
);

const HomeComponent = (props: Props) => {
  const {
    expandState,
    profileState,
    setInstance,
    setInstanceIsEnabled
  } = props;

  const classes = useStyles();

  const instanceKey = "HOME";
  const isEnabled = expandState.instance[instanceKey]?.isEnabled;

  useEffect(() => {
    if (isObjectNullOrEmpty(expandState.instance)) {
      setInstance(instanceKey, {
        isEnabled: false
      });
    }
  }, [expandState, instanceKey, setInstance]);

  const handleDescriptionExpandClick = () => {
    setInstanceIsEnabled(instanceKey, !isEnabled);
  };

  return (
    <div>
      <AppBar color="default" position="fixed">
        <Toolbar>
          <Avatar
            src={profileState.configuration.game?.image}
            style={{
              marginRight: "16px"
            }}
          />
          <Grid>
            <Typography variant="subtitle1" noWrap>
              {profileState.configuration.game?.name}
            </Typography>
            <Typography variant="subtitle2" noWrap>
              {profileState.configuration.game?.version}
            </Typography>
          </Grid>
          <Grid
            style={{
              marginLeft: "auto"
            }}
          >
            <IconButton
              href={profileState.configuration.game?.url || "#"}
              target="_blank"
            >
              <Info />
            </IconButton>
            <IconButton
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
              {profileState.configuration.game?.description}
            </Typography>
          </Toolbar>
        </Collapse>
      </AppBar>
      <Toolbar />
      <Box mt={2}>
        <Typography variant="h6">Packs</Typography>
        <Divider />
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
      <Box mt={2}>
        <Typography variant="h6">Servers</Typography>
        <Divider />
      </Box>
      <div>
        {profileState.configuration.servers?.map(
          (
            value: ConfigurationServer,
            index: number,
            array: ConfigurationServer[]
          ) => {
            return <HomeServer key={`${index}`} server={value} />;
          }
        )}
      </div>
      <Box mt={2}></Box>
    </div>
  );
};

const Home = homeConnector(HomeComponent);

export default Home;
