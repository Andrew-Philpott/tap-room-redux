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
      description: event.target.description.value,
      color: event.target.color.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
    });
  }
  return (
    <form onSubmit={handleNewBeerFormSubmission}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" name="name" />
          </FormControl>
        </Grid>
      </Grid>

      <Button type="submit">Create Beer</Button>
    </form>
  );
}

NewBeerForum.propTypes = {
  onNewBeerCreation: PropTypes.func,
  buttonText: PropTypes.string,
};
