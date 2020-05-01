export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_BEER":
      return action.payload;
    default:
      return state;
  }
};
