import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Box
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import {
  ConfigurationPack,
  ConfigurationPackAddon
} from "../../../helpers/Interface.helper";
import HomePackAddon from "../HomePackAddon/HomePackAddon.component";
import "./HomePack.style.scss";

type Props = {
  key: string;
  pack: ConfigurationPack;
};

const HomePack = (props: Props) => {
  const { pack } = props;

  return (
    <div>
      <Box mt={2}>
        <Grid>
          <Card variant="outlined">
            <CardHeader
              action={
                <IconButton href={pack.url} target="_blank">
                  <Info />
                </IconButton>
              }
              subheader={pack.version}
              subheaderTypographyProps={{
                variant: "body2"
              }}
              title={pack.name}
              titleTypographyProps={{
                variant: "body2"
              }}
            />
            <CardContent>
              <Typography>{pack.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>
      <Box mt={2}>
        <Grid container spacing={2}>
          {pack.addons?.map(
            (
              value: ConfigurationPackAddon,
              index: number,
              array: ConfigurationPackAddon[]
            ) => {
              return <HomePackAddon addon={value} key={index} id={`${index}`} />;
            }
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default HomePack;
