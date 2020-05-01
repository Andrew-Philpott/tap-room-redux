import selectBeerReducer from "../../reducers/select-beer-reducer";

describe("selectBeerReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(selectBeerReducer({}, { type: null })).toEqual({});
  });
});
