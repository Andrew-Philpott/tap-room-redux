import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";

export const BeerDetail = (props) => {
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
        <Container>
          <h1>{beer.name}</h1>
          <Grid container>
            <Grid item xs={4}>
              <p>Brand: {beer.brand}</p>
              <p>Color: {beer.color}</p>
              <p>Aroma: {beer.aroma}</p>
              <p>Flavor: {beer.flavor}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Alcohol Content: {beer.alcoholContent}</p>
              <p>Price: ${beer.price}</p>
              <p>Pints Left: {beer.pints}</p>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid item xs={12}>
            <h2>Reviews</h2>
            {/* {Object.keys(beer.reviews) &&
              Object.keys(beer.reviews).map((review) => {
                return (
                  <>
                    <p>{review.rating}</p>
                    <p>{review.rating}</p>
                  </>
                );
              })} */}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

BeerDetail.propTypes = {
  beer: PropTypes.object,
};

export default BeerDetail;
