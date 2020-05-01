import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("beer list actions", () => {
  const beer = {};

  it("newBeer correctly creates a NEW_BEER action", () => {
    expect(a.newBeer(beer)).toEqual({ type: c.NEW_BEER, payload: beer });
  });

  it("deleteBeer correctly creates a DELETE_BEER action", () => {
    expect(a.deleteBeer(1)).toEqual({ type: c.DELETE_BEER, payload: 1 });
  });

  it("updateBeer correctly creates a UPDATE_BEER action", () => {
    expect(a.updateBeer(beer)).toEqual({ type: c.UPDATE_BEER, payload: beer });
  });

  it("toggleEditBeerFormVisibility correctly creates a TOGGLE_EDIT_BEER_FORM_VISIBILITY action", () => {
    expect(a.toggleEditBeerFormVisibility()).toEqual({
      type: c.TOGGLE_EDIT_BEER_FORM_VISIBILITY,
    });
  });

  it("toggleNewBeerFormVisibility correctly creates a TOGGLE_NEW_BEER_FORM_VISIBILITY action", () => {
    expect(a.toggleNewBeerFormVisibility()).toEqual({
      type: c.TOGGLE_NEW_BEER_FORM_VISIBILITY,
    });
  });

  it("increaseBeerPintQuantity correctly creates a INCREASE_BEER_PINT_QUANTITY action", () => {
    expect(a.increaseBeerPintQuantity(1)).toEqual({
      type: c.INCREASE_BEER_PINT_QUANTITY,
      payload: 1,
    });
  });

  it("decreaseBeerPintQuantity correctly creates a DECREASE_BEER_PINT_QUANTITY action", () => {
    expect(a.decreaseBeerPintQuantity(1)).toEqual({
      type: c.DECREASE_BEER_PINT_QUANTITY,
      payload: 1,
    });
  });

  it("selectBeer correctly creates a SELECT_BEER action", () => {
    expect(a.selectBeer(beer)).toEqual({
      type: c.SELECT_BEER,
      payload: beer,
    });
  });

  it("deselectBeer correctly creates a DESELECT_BEER action", () => {
    expect(a.deselectBeer()).toEqual({
      type: c.DESELECT_BEER,
    });
  });
});
