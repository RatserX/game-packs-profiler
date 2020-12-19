import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Box,
  Avatar,
} from "@material-ui/core";
import { Info, GetApp } from "@material-ui/icons";
import { connect, ConnectedProps } from "react-redux";
import "./HomePack.style.scss";
import {
  ProfilePack,
  ProfilePackAddon,
} from "../../../store/configuration/Configuration.interface";
import HomePackAddon from "../HomePackAddon/HomePackAddon.component";
import HomePackInstruction from "../HomePackInstruction/HomePackInstruction.component";
import { isStringNullOrEmpty } from "../../../helpers/Function.helper";
import { State } from "../../../store/Store";

const mapStateToProperties = (state: State) => ({
  expandState: state.expand,
  locationState: state.location,
});

const mapDispatchToProps = {};

const appConnector = connect(mapStateToProperties, mapDispatchToProps);

type ConnectorProps = ConnectedProps<typeof appConnector>;

type Props = ConnectorProps & {
  key: string;
  pack: ProfilePack;
};

const HomePackComponent = (props: Props): JSX.Element => {
  const { locationState, pack } = props;

  return (
    <Grid className="home-pack" item xs={12} zeroMinWidth>
      <Box mt={2}>
        <Card elevation={3} variant="elevation" square>
          <CardHeader
            action={
              <div>
                <IconButton
                  hidden={isStringNullOrEmpty(pack.url)}
                  href={pack.url || "#"}
                  target="_blank"
                >
                  <Info />
                </IconButton>
                <IconButton
                  hidden={isStringNullOrEmpty(pack.download)}
                  href={pack.download || "#"}
                  target="_blank"
                >
                  <GetApp />
                </IconButton>
              </div>
            }
            avatar={
              <Avatar
                src={
                  pack.image || `${locationState.publicUrl}/images/ph-pack.png`
                }
                variant="rounded"
              />
            }
            subheader={<Typography noWrap>{pack.version}</Typography>}
            subheaderTypographyProps={{
              variant: "subtitle2",
            }}
            title={<Typography noWrap>{pack.name}</Typography>}
            titleTypographyProps={{
              variant: "subtitle1",
            }}
          />
          <CardContent>
            <Typography component="p" color="textSecondary" variant="body2">
              {pack.description}
            </Typography>
            <Box mt={2}>
              <Typography variant="h6">Addons</Typography>
              <Divider />
            </Box>
            <Box mt={2}>
              <Grid container spacing={2}>
                {pack.addons?.map((value: ProfilePackAddon, index: number) => {
                  return (
                    <HomePackAddon addon={value} key={index} id={`${index}`} />
                  );
                })}
              </Grid>
            </Box>
            <Box mt={2}>
              <Typography variant="h6">Instructions</Typography>
              <Divider />
            </Box>
            <Box mt={2}>
              <Grid container spacing={2}>
                {pack.instructions?.map((value: string, index: number) => {
                  return (
                    <HomePackInstruction
                      instruction={value}
                      key={index}
                      id={`${index}`}
                    />
                  );
                })}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

const HomePack = appConnector(HomePackComponent);

export default HomePack;
