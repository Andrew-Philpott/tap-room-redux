import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  ListItem,
  List,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function BeerDetail(props) {
  const { beer } = props;
  return (
    <React.Fragment>
      <h1>Beer details</h1>
      <Container>
        <Grid container component={styles.paper}>
          <Grid item xs={12}>
            <Typography variant="h6">
              <p>Name: {beer.name}</p>
              <p>Brand: {beer.brand}</p>
              <p>Color: {beer.color}</p>
              <p>Aroma: {beer.aroma}</p>
              <p>Flavor: {beer.flavor}</p>
              <p>Alcohol Content: {beer.alcoholContent}</p>
              <p>Price: ${beer.price}</p>
              <p>Pints Left: {beer.pints}</p>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
};

export default BeerDetail;
