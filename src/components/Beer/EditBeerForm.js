import React from "react";
import PropTypes from "prop-types";
import { Input, Button, makeStyles, Grid } from "@material-ui/core";
import { FormControl, InputLabel } from "@material-ui/core";

export const EditBeerForm = (props) => {
  const { beer, onEditBeer } = props;
  const isBackgroundBlack = false;
  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    onEditBeer({
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
    <React.Fragment>
      <div
        style={{
          width: "100%",
          marginTop: "25%",
          justifyContent: "center",
          backgroundColor: isBackgroundBlack ? "black" : "white",
        }}
      >
        <form onSubmit={handleEditBeerFormSubmission}>
          <Input id="id" type="hidden" value={beer.id} name="id" />
          <Grid container>
            <Grid item xs={12}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" type="text" name="name" required />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="brand">Brand</InputLabel>
              <Input id="brand" type="text" name="brand" required />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="color">Color</InputLabel>
              <Input id="color" type="text" name="color" required />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="aroma">Aroma</InputLabel>
              <Input id="aroma" type="text" name="aroma" required />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="flavor">Flavor</InputLabel>
              <Input id="flavor" type="text" name="flavor" required />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="price">Price</InputLabel>
              <Input id="price" type="text" name="price" required />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="alcoholContent">AlcoholContent</InputLabel>
              <Input
                id="alcoholContent"
                type="text"
                name="alcoholContent"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="pints">Pints</InputLabel>
              <Input id="pints" type="text" name="pints" required />
            </Grid>
          </Grid>

          <Button type="submit">Edit Beer</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

EditBeerForm.propTypes = {
  onEditBeer: PropTypes.func,
  beer: PropTypes.object,
};
