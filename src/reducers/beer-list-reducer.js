import * as a from "../actions/ActionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case a.NEW_BEER:
      return [...state, action.payload];
  }
  return state;
};
