import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import newBeerFormVisibilityReducer from "../../reducers/new-beer-form-visibility-reducer";
import editBeerFormVisibilityReducer from "../../reducers/edit-beer-form-visibility-reducer";
import selectBeerReducer from "../../reducers/select-beer-reducer";
import beerListReducer from "../../reducers/beer-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Check that initial state of beerListReducer matches root reducer", () => {
    expect(store.getState().beerList).toEqual(
      beerListReducer({}, { type: null })
    );
  });

  test("Check that initial state of selectBeerReducer matches root reducer", () => {
    expect(store.getState().selectBeer).toEqual(
      selectBeerReducer(null, { type: null })
    );
  });

  test("Check that initial state of newBeerFormVisibilityReducer matches root reducer", () => {
    expect(store.getState().newBeerForm).toEqual(
      newBeerFormVisibilityReducer(false, { type: null })
    );
  });

  test("Check that initial state of editBeerFormVisibilityReducer matches root reducer", () => {
    expect(store.getState().editBeerForm).toEqual(
      editBeerFormVisibilityReducer(false, { type: null })
    );
  });
});
