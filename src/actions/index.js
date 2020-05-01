import * as a from "./ActionTypes";

export const newBeer = (beer) => ({
  type: a.NEW_BEER,
  payload: beer,
});

export const deleteBeer = (id) => ({
  type: a.DELETE_BEER,
  payload: id,
});

export const updateBeer = (id) => ({
  type: a.UPDATE_BEER,
  payload: id,
});

export const toggleEditBeerFormVisibility = () => ({
  type: a.TOGGLE_EDIT_BEER_FORM_VISIBILITY,
});

export const toggleNewBeerFormVisibility = () => ({
  type: a.TOGGLE_NEW_BEER_FORM_VISIBILITY,
});

export const increaseBeerPintQuantity = (id) => ({
  type: a.INCREASE_BEER_PINT_QUANTITY,
  payload: id,
});

export const decreaseBeerPintQuantity = (id) => ({
  type: a.DECREASE_BEER_PINT_QUANTITY,
  payload: id,
});
