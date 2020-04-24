import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function BeerDetail(props) {
  return (
    <React.Fragment>
      <Typography>
        {props.beer.name}
        {props.beer.brand}
        {props.beer.color}
        {props.beer.color}
        {props.beer.aroma}
        {props.beer.flavor}
        {props.beer.alcoholContent}
        {props.beer.price}
        {props.beer.pints}
      </Typography>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  color: PropTypes.string,
  aroma: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
};

export default BeerDetail;
