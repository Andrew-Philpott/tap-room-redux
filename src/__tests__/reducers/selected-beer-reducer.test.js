import selectedBeerReducer from "../../reducers/selected-beer-reducer";

describe("selectedBeerReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(selectedBeerReducer({}, { type: null })).toEqual({});
  });
});
