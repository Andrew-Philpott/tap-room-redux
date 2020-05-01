import editBeerFormVisibilityReducer from "../../reducers/edit-beer-form-visibility-reducer";

describe("editBeerFormVisibilityReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(editBeerFormVisibilityReducer(false, { type: null })).toEqual(false);
  });
});
