import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    color: "white",
    marginTop: "70px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  buttons: {
    backgroundColor: "white",
  },
});

export const BeerDetail = (props) => {
  const { beer, onHideBeerDetail } = props;
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={"col-lg-8 offset-lg-2"}>
        <h1>{beer.name}</h1>
        <p>Brand: {beer.brand}</p>
        <p>Color: {beer.color}</p>
        <p>Aroma: {beer.aroma}</p>
        <p>Flavor: {beer.flavor}</p>
        <p>Alcohol Content: {beer.alcoholContent}</p>
        <p>Price: ${beer.price}</p>
        <p>Pints Left: {beer.pints}</p>
        <Button className={classes.buttons} onClick={() => onHideBeerDetail()}>
          Return to beers
        </Button>
      </div>
    </div>
  );
};

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onHideBeerDetail: PropTypes.func,
};

export default BeerDetail;
