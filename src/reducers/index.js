import { combineReducers } from "redux";
import beerListReducer from "./beer-list-reducer";
import newBeerFormVisibilityReducer from "./new-beer-form-visibility-reducer";
import editBeerFormVisibilityReducer from "./edit-beer-form-visibility-reducer";
import selectedBeerReducer from "./selected-beer-reducer";

const rootReducer = combineReducers({
  beerList: beerListReducer,
  newBeerForm: newBeerFormVisibilityReducer,
  editBeerForm: editBeerFormVisibilityReducer,
  selectedBeer: selectedBeerReducer,
});

export default rootReducer;
