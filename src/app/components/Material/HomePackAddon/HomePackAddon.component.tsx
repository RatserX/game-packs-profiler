import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  CardActions,
  Collapse,
  Avatar,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { GetApp, ExpandMore } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import {
  timestampValueToDate,
  isObjectNullOrEmpty
} from "../../../helpers/Function.helper";
import { State } from "../../../store/Store";
import {
  setInstance,
  setInstanceIsEnabled
} from "../../../store/expand/Expand.action";
import "./HomePackAddon.style.scss";
import { ConfigurationPackAddon } from "../../../helpers/Interface.helper";

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

  const date = timestampValueToDate(addon.timestamp);
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
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar src={addon.image} />}
          subheader={date}
          subheaderTypographyProps={{
            variant: "body2"
          }}
          title={addon.name}
          titleTypographyProps={{
            variant: "body2"
          }}
        />
        <CardActions disableSpacing>
          <IconButton href={addon.url || "#"} target="_blank">
            <GetApp />
          </IconButton>
          <IconButton
            className={
              isEnabled
                ? classes.expand
                : classes.collapse
            }
            onClick={handleDescriptionExpandClick}
            style={{
              marginLeft: "auto"
            }}
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse
          in={isEnabled}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography
              component="p"
              color="textSecondary"
              paragraph
              variant="body2"
            >
              {addon.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

const HomePackAddon = appConnector(HomePackAddonComponent);

export default HomePackAddon;
