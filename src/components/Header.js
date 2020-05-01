import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  navLinks: {
    fontSize: "1.2em",
    color: "white",
    textDecoration: "none",
  },
  navbar: {
    backgroundColor: "#cc7000",
    marginBottom: "200",
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Toolbar>Keg House</Toolbar>
        </Grid>
        <Grid item xs={9}>
          <Toolbar>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};
