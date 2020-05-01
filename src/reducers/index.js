import { combineReducers } from "redux";
import beerListReducer from "./beer-list-reducer";
import newBeerFormVisibleReducer from "./new-beer-form-visible-reducer";
import editBeerFormVisibleReducer from "./edit-beer-form-visible-reducer";

const rootReducer = combineReducers({
  beerList: beerListReducer,
  newBeerFormVisible: newBeerFormVisibleReducer,
  editBeerFormVisible: editBeerFormVisibleReducer,
});

export default rootReducer;
