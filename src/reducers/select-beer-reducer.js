import * as a from "../actions/ActionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case a.SELECT_BEER:
      return action.payload;
    case a.DESELECT_BEER:
      return null;
    default:
      return state;
  }
};
