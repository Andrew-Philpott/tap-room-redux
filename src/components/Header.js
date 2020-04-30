import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

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
          <Toolbar>
            <Link className={classes.navLinks} to="/">
              Keg House
            </Link>
          </Toolbar>
        </Grid>
        <Grid item xs={9}>
          <Toolbar>
            <Grid item xs={2}>
              {/* <Link className={classes.navLinks} to="/ontap">
                On Tap
              </Link> */}
            </Grid>
            <Grid item xs={2}>
              {/* <Link className={classes.navLinks} to="/about">
                About
              </Link> */}
            </Grid>
            <Grid item xs={2}>
              {/* <Link className={classes.navLinks} to="/community">
                Community
              </Link> */}
            </Grid>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};
