import selectBeerReducer from "../../reducers/select-beer-reducer";
import * as c from "../../actions/ActionTypes";

describe("selectBeerReducer", () => {
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

  test("Should return default state if no action type is recognized", () => {
    expect(selectBeerReducer({}, { type: null })).toEqual({});
  });

  test("Should set a beer as the selectBeer", () => {
    expect(
      selectBeerReducer({}, { type: c.SELECT_BEER, payload: beer })
    ).toEqual(beer);
  });
});
