import newBeerFormVisibilityReducer from "../../reducers/new-beer-form-visibility-reducer";
import * as c from "../../actions/ActionTypes";

describe("newBeerFormVisibilityReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(newBeerFormVisibilityReducer(false, { type: null })).toEqual(false);
  });
});
