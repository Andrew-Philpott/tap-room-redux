import newBeerFormVisibilityReducer from "../../reducers/new-beer-form-visibility-reducer";
import * as c from "../../actions/ActionTypes";

describe("newBeerFormVisibilityReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(newBeerFormVisibilityReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle the state between true and false", () => {
    expect(
      newBeerFormVisibilityReducer(false, {
        type: c.TOGGLE_NEW_BEER_FORM_VISIBILITY,
      })
    ).toEqual(true);
  });
});
