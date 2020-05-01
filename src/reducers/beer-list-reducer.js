import * as a from "../actions/ActionTypes";

export default (state = {}, action) => {
  let newState = {};
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
  }
  return state;
};
