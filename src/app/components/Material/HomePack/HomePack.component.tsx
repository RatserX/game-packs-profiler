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
  List
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import "./HomePack.style.scss";
import {
  ConfigurationPack,
  ConfigurationPackAddon
} from "../../../helpers/Interface.helper";
import HomePackAddon from "../HomePackAddon/HomePackAddon.component";
import HomePackInstruction from "../HomePackInstruction/HomePackInstruction.component";
import { isStringNullOrEmpty } from "../../../helpers/Function.helper";

type Props = {
  key: string;
  pack: ConfigurationPack;
};

const HomePack = (props: Props) => {
  const { pack } = props;

  return (
    <Box mt={2}>
      <Grid>
        <Card elevation={3} variant="elevation" square>
          <CardHeader
            action={
              <IconButton hidden={isStringNullOrEmpty(pack.url)} href={pack.url} target="_blank">
                <Info />
              </IconButton>
            }
            avatar={<Avatar src={pack.image || "/images/ph-pack.png"} variant="rounded" />}
            subheader={pack.version}
            subheaderTypographyProps={{
              variant: "subtitle2"
            }}
            title={pack.name}
            titleTypographyProps={{
              variant: "subtitle1"
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
                {pack.addons?.map(
                  (
                    value: ConfigurationPackAddon,
                    index: number,
                    array: ConfigurationPackAddon[]
                  ) => {
                    return (
                      <HomePackAddon
                        addon={value}
                        key={index}
                        id={`${index}`}
                      />
                    );
                  }
                )}
              </Grid>
            </Box>
            <Box mt={2}>
              <Typography variant="h6">Instructions</Typography>
              <Divider />
            </Box>
            <Box mt={2}>
              <List dense>
                {pack.instructions?.map(
                  (
                    value: string,
                    index: number,
                    array: string[]
                  ) => {
                    return (
                      <HomePackInstruction
                        instruction={value}
                        key={index}
                        id={`${index}`}
                      />
                    );
                  }
                )}
              </List>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default HomePack;
