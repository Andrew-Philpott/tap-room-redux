import { combineReducers } from "redux";
import beerListReducer from "./beer-list-reducer";
import newBeerFormVisibilityReducer from "./new-beer-form-visibility-reducer";
import editBeerFormVisibilityReducer from "./edit-beer-form-visibility-reducer";
import selectBeerReducer from "./select-beer-reducer";

const rootReducer = combineReducers({
  beerList: beerListReducer,
  newBeerForm: newBeerFormVisibilityReducer,
  editBeerForm: editBeerFormVisibilityReducer,
  selectBeer: selectBeerReducer,
});

export default rootReducer;
