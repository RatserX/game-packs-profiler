import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Paper,
  Avatar,
  Link,
  Collapse,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { Info, ExpandMore } from "@material-ui/icons";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../../store/Store";
import { ConfigurationPack } from "../../../helpers/Interface.helper";
import {
  setInstance,
  setInstanceIsEnabled
} from "../../../store/expand/Expand.action";
import HomePack from "../HomePack/HomePack.component";
import "./Home.style.scss";
import { isObjectNullOrEmpty } from "../../../helpers/Function.helper";

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
  const { expandState, profileState, setInstance, setInstanceIsEnabled } = props;
  
  const classes = useStyles();

  const instanceKey = `HOME`;
  const isEnabled = expandState.instance[instanceKey]?.isEnabled;

  useEffect(() => {
    if (isObjectNullOrEmpty(expandState.instance)) {
      setInstance(instanceKey, {
        isEnabled: false
      });
    }
  }, [expandState, instanceKey]);

  const handleDescriptionExpandClick = () => {
    setInstanceIsEnabled(instanceKey, !isEnabled);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar color="default" position="fixed">
          <Toolbar title={profileState.configuration.game?.name}>
            <Avatar alt="game-image" src={profileState.configuration.game?.image}></Avatar>
            <Grid direction="column" spacing={0}>
              <Typography variant="h6" noWrap>{profileState.configuration.game?.name}</Typography>
              <Typography variant="subtitle1" noWrap>v{profileState.configuration.game?.version}</Typography>
            </Grid>
            <Grid direction="row" spacing={0} style={{
              marginLeft: "auto"
            }}>
              <IconButton href={profileState.configuration.game?.url || "#"} target="_blank">
                <Info />
              </IconButton>
              <IconButton
                className={
                  isEnabled
                    ? classes.expand
                    : classes.collapse
                }
                onClick={handleDescriptionExpandClick}>
                <ExpandMore />
              </IconButton>
            </Grid>
          </Toolbar>
          <Collapse
            in={isEnabled}
            timeout="auto"
            unmountOnExit
          >
            <Toolbar>
              <Typography
                component="p"
                color="textSecondary"
                paragraph
                variant="body2"
              >
                {profileState.configuration.game?.description}
              </Typography>
            </Toolbar>
          </Collapse>
        </AppBar>
        <Toolbar />
      </React.Fragment>
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
