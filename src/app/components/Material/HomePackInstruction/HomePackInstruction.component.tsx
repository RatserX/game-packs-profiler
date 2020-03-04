import React from "react";
import {
  makeStyles,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import { Label } from "@material-ui/icons";

type Props = {
  instruction: string;
  id: string;
};

const useStyles = makeStyles(theme => ({
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

const HomePackAddon = (props: Props) => {
  const { instruction, id } = props;
  const classes = useStyles();

  return (
      <ListItem>
          <ListItemAvatar>
            <Label/>
          </ListItemAvatar>
          <ListItemText>
            <Typography component="p" variant="body2">{instruction}</Typography>
          </ListItemText>
      </ListItem>
  );
};

export default HomePackAddon;
