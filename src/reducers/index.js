import { combineReducers } from "redux";
import beerListReducer from "./beer-list-reducer";
import newBeerFormVisibilityReducer from "./new-beer-form-visibility-reducer";
import editBeerFormVisibilityReducer from "./edit-beer-form-visibility-reducer";

const rootReducer = combineReducers({
  beerList: beerListReducer,
  newBeerFormVisibility: newBeerFormVisibilityReducer,
  editBeerFormVisibility: editBeerFormVisibilityReducer,
});

export default rootReducer;
