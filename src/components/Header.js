import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#cc7000",
  },
  name: {
    paddingLeft: "20px",
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar}>
      <h1 className={classes.name}>Tap Room</h1>
    </AppBar>
  );
};
