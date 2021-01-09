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
  Box,
} from "@material-ui/core";
import { Book, GetApp, ExpandMore, Info } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import "./HomePackAddon.style.scss";
import {
  isObjectNull,
  isObjectNullOrEmpty,
  isStringNullOrEmpty,
  timestampValueToDate,
} from "../../../helpers/Function.helper";
import { ProfilePackAddon } from "../../../store/configuration/Configuration.interface";
import {
  setInstance,
  setInstanceIsEnabled,
} from "../../../store/expand/Expand.action";
import { State } from "../../../store/Store";

const mapStateToProperties = (state: State) => ({
  expandState: state.expand,
  locationState: state.location,
});

const mapDispatchToProps = {
  setInstance,
  setInstanceIsEnabled,
};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {
  addon: ProfilePackAddon;
  id: string;
};

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
    disablePaddingBottom: {
      paddingBottom: "0",
    },
    disablePaddingTop: {
      paddingTop: "0",
    },
  })
);

const HomePackAddonComponent = (props: Props): JSX.Element => {
  const {
    expandState,
    locationState,
    setInstance,
    setInstanceIsEnabled,
    addon,
    id,
  } = props;

  const classes = useStyles();

  const date = timestampValueToDate(addon.timestamp);
  const required = isObjectNull(addon.required) ? true : addon.required;

  const instanceKey = `HOMEPACKADDON${id}`;
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
                src={
                  addon.image ||
                  `${locationState.publicUrl}/images/ph-addon.png`
                }
                variant="rounded"
              />
            }
            className="disable-padding-bottom"
            subheader={
              <Typography noWrap variant="subtitle2">
                {addon.version}
              </Typography>
            }
            subheaderTypographyProps={{
              variant: "subtitle2",
            }}
            title={
              <Typography noWrap variant="subtitle1">
                {addon.name}
              </Typography>
            }
            titleTypographyProps={{
              variant: "subtitle1",
            }}
          />
          <CardContent>
            <Typography
              component="p"
              color="textSecondary"
              noWrap
              variant="caption"
            >
              <strong>Date:</strong> {date}
            </Typography>
            <Typography
              component="p"
              color="textSecondary"
              noWrap
              variant="caption"
            >
              <strong>Required:</strong> {required ? "Yes" : "No"}
            </Typography>
          </CardContent>
          <CardActions className="disable-padding-top" disableSpacing>
            <IconButton
              hidden={isStringNullOrEmpty(addon.download)}
              href={addon.download || "#"}
              target="_blank"
            >
              <GetApp />
            </IconButton>
            <IconButton
              hidden={isStringNullOrEmpty(addon.url)}
              href={addon.url || "#"}
              target="_blank"
            >
              <Info />
            </IconButton>
            <IconButton
              hidden={isStringNullOrEmpty(addon.wiki)}
              href={addon.wiki || "#"}
              target="_blank"
            >
              <Book />
            </IconButton>
            <IconButton
              className={isEnabled ? classes.expand : classes.collapse}
              hidden={isStringNullOrEmpty(addon.description)}
              onClick={handleDescriptionExpandClick}
              style={{
                marginLeft: "auto",
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
