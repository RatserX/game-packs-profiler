import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  CardHeader,
  IconButton
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import {
  ProfilePack,
  ProfilePackAddon
} from "../../../helpers/Interface.helper";
import HomePackAddon from "../HomePackAddon/HomePackAddon.component";
import "./HomePack.style.scss";

type Props = {
  key: string;
  pack: ProfilePack;
};

const HomePack = (props: Props) => {
  const { pack } = props;

  return (
    <div>
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
      <Divider variant="fullWidth" />
      <Grid container spacing={1}>
        {pack.addons?.map(
          (
            value: ProfilePackAddon,
            index: number,
            array: ProfilePackAddon[]
          ) => {
            return <HomePackAddon addon={value} key={index} id={`${index}`} />;
          }
        )}
      </Grid>
    </div>
  );
};

export default HomePack;
