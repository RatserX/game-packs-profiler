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
  Collapse
} from "@material-ui/core";
import { GetApp, ExpandMore } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import { ProfilePackAddon } from "../../../helpers/Interface.helper";
import { timestampValueToDate, isObjectNullOrEmpty } from "../../../helpers/Function.helper";
import { State } from "../../../store/Store";
import {
  setArray,
  setArrayIsEnabled,
  setExpand
} from "../../../store/expand/Expand.action";
import "./HomePackAddon.style.scss";

const mapStateToProperties = (state: State) => ({
  expandState: state.expand
});

const mapDispatchToProps = {
  setArray,
  setArrayIsEnabled,
  setExpand
};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {
  addon: ProfilePackAddon;
  id: string;
};

const HomePackAddonComponent = (props: Props) => {
  const { expandState, setArrayIsEnabled, addon, id } = props;
  const date = timestampValueToDate(addon.timestamp);

  const isCardExpanded = () => {
    return expandState.expand?.array[id]?.isEnabled;
  };

  const handleDescriptionExpandClick = () => {
    setArrayIsEnabled(id, !isCardExpanded());
  };

  useEffect(() => {
    if (isObjectNullOrEmpty(expandState)) {
      setExpand({
        array: {
          [id]: {
            isEnabled: false
          }
        }
      });
    }
  }, [expandState, id, setExpand]);

  return (
    <Grid item xs={12} sm={6} md={3} xl={2}>
      <Card variant="outlined">
        <CardHeader
          action={
            <IconButton href={addon.url} target="_blank">
              <GetApp />
            </IconButton>
          }
          subheader={date}
          subheaderTypographyProps={{
            variant: "body2"
          }}
          title={addon.name}
          titleTypographyProps={{
            variant: "body2"
          }}
        />
        <CardMedia
          alt="addon"
          component="img"
          image="https://material-ui.com/static/images/grid-list/breakfast.jpg"
        />
        <CardActions disableSpacing>
          <IconButton href={addon.url} target="_blank">
            <GetApp />
          </IconButton>
          <IconButton
            aria-expanded={isCardExpanded()}
            onClick={handleDescriptionExpandClick}
            style={{
              marginLeft: "auto"
            }}
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={isCardExpanded()} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{addon.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

const HomePackAddon = appConnector(HomePackAddonComponent);

export default HomePackAddon;
