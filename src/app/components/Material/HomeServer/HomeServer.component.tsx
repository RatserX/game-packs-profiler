import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardContent,
} from "@material-ui/core";
import { SettingsEthernet, SettingsInputAntenna } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import "./HomeServer.style.scss";
import { ProfileServer } from "../../../store/configuration/Configuration.interface";
import { State } from "../../../store/Store";

const mapStateToProperties = (state: State) => ({
  locationState: state.location,
});

const mapDispatchToProps = {};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {
  key: string;
  server: ProfileServer;
};

const HomeServerComponent = (props: Props): JSX.Element => {
  const { locationState, server } = props;

  return (
    <Grid className="home-server" item xs={12} sm={6}>
      <Box mt={2}>
        <Card elevation={3} variant="elevation" square>
          <CardHeader
            avatar={
              <Avatar
                src={
                  server.image ||
                  `${locationState.publicUrl}/images/ph-server.png`
                }
                variant="rounded"
              />
            }
            subheader={server.description}
            subheaderTypographyProps={{
              variant: "subtitle2",
            }}
            title={server.name}
            titleTypographyProps={{
              variant: "subtitle1",
            }}
          />
          <CardContent>
            <List dense disablePadding>
              <ListItem disableGutters>
                <ListItemIcon>
                  <SettingsInputAntenna />
                </ListItemIcon>
                <ListItemText>
                  <Typography component="p" color="textPrimary" variant="body1">
                    Address
                  </Typography>
                  <Typography
                    component="p"
                    color="textSecondary"
                    variant="body2"
                  >
                    {server.address}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <SettingsEthernet />
                </ListItemIcon>
                <ListItemText>
                  <Typography component="p" color="textPrimary" variant="body1">
                    Port
                  </Typography>
                  <Typography
                    component="p"
                    color="textSecondary"
                    variant="body2"
                  >
                    {server.port}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

const HomeServer = appConnector(HomeServerComponent);

export default HomeServer;
