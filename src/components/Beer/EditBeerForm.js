import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    color: "white",
  },
  buttons: {
    backgroundColor: "white",
  },
});

export const EditBeerForm = (props) => {
  const classes = useStyles();
  const { beer, onEditBeerFormSubmission, onHideEditBeerForm } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    onEditBeerFormSubmission({
      id: beer.id,
      name: event.target.name.value,
      brand: event.target.brand.value,
      color: event.target.color.value,
      aroma: event.target.aroma.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
    });
  }

  return (
    <div style={{ marginTop: "70px" }} className={"col-lg-8 offset-lg-2"}>
      <form onSubmit={handleEditBeerFormSubmission}>
        <div className="form-group">
          <label className={classes.label}>Name</label>
          <input
            id="name"
            defaultValue={beer.name}
            type="text"
            name="name"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label}>Brand</label>
          <input
            id="brand"
            defaultValue={beer.brand}
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
            defaultValue={beer.color}
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
            defaultValue={beer.aroma}
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
            defaultValue={beer.flavor}
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
            defaultValue={beer.price}
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
            defaultValue={beer.alcoholContent}
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
            defaultValue={beer.pints}
            type="text"
            name="pints"
            className={"form-control"}
          />
        </div>
        <Button
          className={classes.buttons}
          onClick={() => onHideEditBeerForm()}
        >
          Return to beers
        </Button>
        <Button
          style={{ marginLeft: "5px" }}
          className={classes.buttons}
          type="submit"
        >
          Edit Beer
        </Button>
      </form>
    </div>
  );
};

EditBeerForm.propTypes = {
  onNewBeerFormSubmission: PropTypes.func,
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
