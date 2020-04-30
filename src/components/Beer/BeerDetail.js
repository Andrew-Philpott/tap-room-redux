import React from "react";
import PropTypes from "prop-types";
import { Typography, Container, Grid, makeStyles } from "@material-ui/core";

function BeerDetail(props) {
  const { beer } = props;
  const isBackgroundBlack = false;
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          marginTop: "25%",
          backgroundColor: isBackgroundBlack ? "black" : "white",
          alignContent: "left",
        }}
      >
        <h1>Beer details</h1>
        <Container>
          <Grid container>
            <Grid item xs={8}>
              <p>Name: {beer.name}</p>
              <p>Brand: {beer.brand}</p>
              <p>Color: {beer.color}</p>
              <p>Aroma: {beer.aroma}</p>
              <p>Flavor: {beer.flavor}</p>
              <p>Alcohol Content: {beer.alcoholContent}</p>
              <p>Price: ${beer.price}</p>
              <p>Pints Left: {beer.pints}</p>
            </Grid>
            <Grid item xs={4}>
              {beer.reviews.map((review) => {
                return (
                  <>
                    <p>{review.rating}</p>
                    <p>{review.rating}</p>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
};

export default BeerDetail;
