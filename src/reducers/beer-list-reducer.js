import * as a from "../actions/ActionTypes";

export default (state = {}, action) => {
  let newState = {};
  let beer = null;
  switch (action.type) {
    case a.NEW_BEER:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case a.DELETE_BEER:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case a.UPDATE_BEER:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case a.INCREASE_BEER_PINT_QUANTITY:
      newState = { ...state };
      beer = newState[action.payload];
      beer["pints"] += 1;
      newState[action.payload] = beer;
      return newState;
    case a.DECREASE_BEER_PINT_QUANTITY:
      newState = { ...state };
      beer = newState[action.payload];
      beer["pints"] -= 1;
      return newState;
    default:
      return state;
  }
};
