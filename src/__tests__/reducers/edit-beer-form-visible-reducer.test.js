import editBeerFormVisibleReducer from "../../reducers/edit-beer-form-visible-reducer";

describe("editBeerFormVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(editBeerFormVisibleReducer(false, { type: null })).toEqual(false);
  });
});
