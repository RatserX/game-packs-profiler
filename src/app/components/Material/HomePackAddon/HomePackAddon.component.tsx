import React, { useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  CardActions,
  Collapse,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
  Box
} from "@material-ui/core";
import { GetApp, ExpandMore, Info } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import "./HomePackAddon.style.scss";
import {
  timestampValueToDate,
  isObjectNullOrEmpty,
  isStringNullOrEmpty
} from "../../../helpers/Function.helper";
import { ConfigurationPackAddon } from "../../../helpers/Interface.helper";
import { State } from "../../../store/Store";
import {
  setInstance,
  setInstanceIsEnabled
} from "../../../store/expand/Expand.action";

const mapStateToProperties = (state: State) => ({
  expandState: state.expand
});

const mapDispatchToProps = {
  setInstance,
  setInstanceIsEnabled
};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {
  addon: ConfigurationPackAddon;
  id: string;
};

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

const HomePackAddonComponent = (props: Props) => {
  const { expandState, setInstanceIsEnabled, addon, id } = props;

  const classes = useStyles();

  timestampValueToDate(addon.timestamp);

  const instanceKey = `HOMEPACKADDON${id}`;
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
    <Grid
      className="home-pack-addon"
      item
      xs={12}
      sm={6}
      md={4}
      xl={3}
      zeroMinWidth
    >
      <Box>
        <Card variant="outlined" square>
          <CardHeader
            avatar={
              <Avatar
                src={addon.image || "/images/ph-addon.png"}
                variant="rounded"
              />
            }
            subheader={
              <Typography noWrap variant="subtitle2">
                {addon.version}
              </Typography>
            }
            subheaderTypographyProps={{
              variant: "subtitle2"
            }}
            title={
              <Typography noWrap variant="subtitle1">
                {addon.name}
              </Typography>
            }
            titleTypographyProps={{
              variant: "subtitle1"
            }}
          />
          <CardActions disableSpacing>
            <IconButton
              hidden={isStringNullOrEmpty(addon.url)}
              href={addon.url || "#"}
              target="_blank"
            >
              <Info />
            </IconButton>
            <IconButton
              hidden={isStringNullOrEmpty(addon.download)}
              href={addon.download || "#"}
              target="_blank"
            >
              <GetApp />
            </IconButton>
            <IconButton
              className={isEnabled ? classes.expand : classes.collapse}
              hidden={isStringNullOrEmpty(addon.description)}
              onClick={handleDescriptionExpandClick}
              style={{
                marginLeft: "auto"
              }}
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={isEnabled} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography component="p" color="textSecondary" variant="body2">
                {addon.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </Grid>
  );
};

const HomePackAddon = appConnector(HomePackAddonComponent);

export default HomePackAddon;
