import React from "react";
import {
  makeStyles,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";
import HtmlReactParser from "html-react-parser";
import { Label } from "@material-ui/icons";

type Props = {
  instruction: string;
  id: string;
};

const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const HomePackAddon = (props: Props): JSX.Element => {
  const { instruction } = props;
  const classes = useStyles();

  return (
    <ListItem className="disable-padding-bottom disable-padding-top">
      <ListItemAvatar>
        <Label />
      </ListItemAvatar>
      <ListItemText>
        <Typography component="p" variant="body2">
          {HtmlReactParser(instruction)}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default HomePackAddon;
