import beerListReducer from "../../reducers/beer-list-reducer.js";
import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("beerListReducer", () => {
  let action;
  const beer = {
    id: 1,
    name: "Universale",
    brand: "Fremont",
    color: "Golden caramel",
    aroma: "Citrus, apple, biscuit",
    flavor: "Pine, orange, bready",
    price: 5,
    alcoholContent: 5.6,
    pints: 124,
    reviews: [],
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(beerListReducer([], { type: null })).toEqual([]);
  });

  test("Should successfully add new beer to the beer list", () => {
    action = {
      type: c.NEW_BEER,
      payload: beer,
    };

    expect(beerListReducer([], action)).toEqual([beer]);
  });

  test("Should successfully delete a beer from the beer list", () => {
    action = {
      type: c.DELETE_BEER,
      payload: 1,
    };

    expect(beerListReducer([beer], action)).toEqual([]);
  });
});
