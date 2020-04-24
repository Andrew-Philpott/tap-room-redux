import { v4 } from "uuid";
import React from "react";
import PropTypes from "prop-types";
import { Input, Button, makeStyles, Grid } from "@material-ui/core";
import { FormControl, InputLabel } from "@material-ui/core";

const useStyles = makeStyles({
  forum: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function NewBeerForum(props) {
  const classes = useStyles();
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      id: v4(),
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
    <form onSubmit={handleNewBeerFormSubmission}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" name="name" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="brand">Brand</InputLabel>
            <Input id="brand" type="text" name="brand" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="color">Color</InputLabel>
            <Input id="color" type="text" name="color" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="aroma">Aroma</InputLabel>
            <Input id="aroma" type="text" name="aroma" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="flavor">Flavor</InputLabel>
            <Input id="flavor" type="text" name="flavor" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input id="price" type="text" name="price" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="alcoholContent">AlcoholContent</InputLabel>
            <Input
              id="alcoholContent"
              type="text"
              name="alcoholContent"
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="pints">Pints</InputLabel>
            <Input id="pints" type="text" name="pints" required />
          </FormControl>
        </Grid>
      </Grid>

      <Button type="submit">Create Beer</Button>
    </form>
  );
}

NewBeerForum.propTypes = {
  onNewBeerCreation: PropTypes.func,
};
