export default (state = {}, action) => {
  switch (action.type) {
    case "DESELECT_BEER":
      return action.payload;
    default:
      return state;
  }
};
