import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";

export const BeerDetail = (props) => {
  const {
    brand,
    color,
    aroma,
    flavor,
    alcoholContent,
    reviews,
    price,
    name,
    pints,
    id,
  } = props.beer;
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
          <h1>{name}</h1>
          <Grid container>
            <Grid item xs={4}>
              <p>Brand: {brand}</p>
              <p>Color: {color}</p>
              <p>Aroma: {aroma}</p>
              <p>Flavor: {flavor}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Alcohol Content: {alcoholContent}</p>
              <p>Price: ${price}</p>
              <p>Pints Left: {pints}</p>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid item xs={12}>
            {/* <h2>Reviews</h2> */}
            {/* {Object.values(reviews).map((review) => {
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
  name: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  aroma: PropTypes.string,
  color: PropTypes.string,
  pints: PropTypes.number,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  reviews: PropTypes.object,
};

export default BeerDetail;
