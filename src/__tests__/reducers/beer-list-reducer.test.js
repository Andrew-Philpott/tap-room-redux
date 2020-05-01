import beerListReducer from "../../reducers/beer-list-reducer.js";
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

  const updatedBeer = {
    id: 1,
    name: "Universale",
    brand: "Fremont2.0",
    color: "Pink",
    aroma: "Citrus, apple, biscuit",
    flavor: "Pine, orange, bready",
    price: 8,
    alcoholContent: 5.6,
    pints: 80,
    reviews: [{ rating: "5", description: "Great stuff" }],
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new beer to the beer list", () => {
    action = {
      type: c.NEW_BEER,
      payload: beer,
    };

    expect(beerListReducer({}, action)).toEqual({ [beer.id]: beer });
  });

  test("Should successfully delete a beer from the beer list", () => {
    action = {
      type: c.DELETE_BEER,
      payload: 1,
    };

    expect(beerListReducer({ [beer.id]: beer }, action)).toEqual({});
  });

  test("Should successfully update a beer in the beer list", () => {
    action = {
      type: c.UPDATE_BEER,
      payload: updatedBeer,
    };

    expect(beerListReducer({ [beer.id]: beer }, action)).toEqual({
      [updatedBeer.id]: updatedBeer,
    });
  });

  test("Should successfully increase the number of pints for a beer", () => {
    let increasedBeerPintQuantityByOne = beer;
    increasedBeerPintQuantityByOne.pints += 1;
    action = {
      type: c.INCREASE_BEER_PINT_QUANTITY,
      payload: beer.id,
    };
    expect(beerListReducer({ [beer.id]: beer }, action)).toEqual({
      [beer.id]: increasedBeerPintQuantityByOne,
    });
  });

  test("Should successfully decrease the number of pints for a beer", () => {
    let decreasedBeerPintQuantityByOne = beer;
    decreasedBeerPintQuantityByOne.pints -= 1;
    action = {
      type: c.DECREASE_BEER_PINT_QUANTITY,
      payload: beer.id,
    };
    expect(beerListReducer({ [beer.id]: beer }, action)).toEqual({
      [beer.id]: decreasedBeerPintQuantityByOne,
    });
  });
});
