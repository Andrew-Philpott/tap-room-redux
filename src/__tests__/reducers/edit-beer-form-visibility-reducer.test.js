import editBeerFormVisibilityReducer from "../../reducers/edit-beer-form-visibility-reducer";
import * as c from "../../actions/ActionTypes";

describe("editBeerFormVisibilityReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(editBeerFormVisibilityReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle the state between true and false", () => {
    expect(
      editBeerFormVisibilityReducer(false, {
        type: c.TOGGLE_EDIT_BEER_FORM_VISIBILITY,
      })
    ).toEqual(true);
  });
});
