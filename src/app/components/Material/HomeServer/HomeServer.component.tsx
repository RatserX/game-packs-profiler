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
  ListItemText
} from "@material-ui/core";
import { SettingsEthernet, SettingsInputAntenna } from "@material-ui/icons";
import "./HomeServer.style.scss";
import { ConfigurationServer } from "../../../helpers/Interface.helper";

type Props = {
  key: string;
  server: ConfigurationServer;
};

const HomeServer = (props: Props) => {
  const { server } = props;

  return (
    <div>
      <Box mt={2}>
        <Grid item xs={12} sm={6}>
          <Card elevation={3} variant="elevation" square>
            <CardHeader
              avatar={
                <Avatar
                  src={server.image || "/images/ph-server.png"}
                  variant="rounded"
                />
              }
              subheader={server.description}
              subheaderTypographyProps={{
                variant: "subtitle2"
              }}
              title={server.name}
              titleTypographyProps={{
                variant: "subtitle1"
              }}
            />
            <List dense>
              <ListItem>
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
              <ListItem dense>
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
          </Card>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeServer;
