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
});
