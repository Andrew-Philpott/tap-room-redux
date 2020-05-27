import { v4 } from "uuid";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    color: "white",
  },
  buttons: {
    backgroundColor: "white",
  },
});

export const NewBeerForm = (props) => {
  const classes = useStyles();
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerFormSubmission({
      id: v4(),
      name: event.target.name.value,
      brand: event.target.brand.value,
      color: event.target.color.value,
      aroma: event.target.aroma.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pints: parseInt(event.target.pints.value),
    });
  }
  return (
    <div style={{ marginTop: "70px" }} className={"col-lg-8 offset-lg-2"}>
      <form onSubmit={handleNewBeerFormSubmission}>
        <div className="form-group">
          <label className={classes.label}>Name</label>
          <input id="name" type="text" name="name" className={"form-control"} />
        </div>

        <div className="form-group">
          <label className={classes.label}>Brand</label>
          <input
            id="brand"
            type="text"
            name="brand"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="color">
            Color
          </label>
          <input
            id="color"
            type="text"
            name="color"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="aroma">
            Aroma
          </label>
          <input
            id="aroma"
            type="text"
            name="aroma"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="flavor">
            Flavor
          </label>
          <input
            id="flavor"
            type="text"
            name="flavor"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="text"
            name="price"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="alcoholContent">
            AlcoholContent
          </label>
          <input
            id="alcoholContent"
            type="text"
            name="alcoholContent"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="pints">
            Pints
          </label>
          <input
            id="pints"
            type="text"
            name="pints"
            className={"form-control"}
          />
        </div>
        <Button
          className={classes.buttons}
          onClick={() => props.onHideNewBeerForm()}
        >
          Return to beers
        </Button>
        <Button
          style={{ marginLeft: "5px" }}
          className={classes.buttons}
          type="submit"
        >
          Add Beer
        </Button>
      </form>
    </div>
  );
};

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};
