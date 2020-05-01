import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("beer list actions", () => {
  const beer = {};

  it("newBeer correctly creates a NEW_BEER action", () => {
    expect(a.newBeer(beer)).toEqual({ type: c.NEW_BEER, payload: beer });
  });
});
