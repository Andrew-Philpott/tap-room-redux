import React from "react";
import { v4 } from "uuid";
import BeerList from "./BeerList";
import NewBeerForum from "./NewBeerForum";
import { Button } from "@material-ui/core";

const beerList = [
  {
    id: v4(),
    name: "Universale",
    brand: "Fremont",
    color: "Golden caramel",
    aroma: "Citrus, apple, biscuit",
    flavor: "Pine, orange, bready",
    price: 5,
    alcoholContent: 5.6,
    pints: 124,
  },
  {
    id: v4(),
    name: "Interurban",
    brand: "Fremont",
    color: "Yellow amber",
    aroma: "Orange, dank, juicy",
    flavor: "Grapefruit, pine, honey",
    price: 5,
    alcoholContent: 6.2,
    pints: 124,
  },
  {
    id: v4(),
    name: "Universale",
    brand: "Fremont",
    color: "Golden caramel",
    aroma: "Citrus, apple, biscuit",
    flavor: "Pine, orange, bready",
    price: 5,
    alcoholContent: 5.6,
    pints: 124,
  },
  {
    id: v4(),
    name: "Universale",
    brand: "Fremont",
    color: "Golden caramel",
    aroma: "Citrus, apple, biscuit",
    flavor: "Pine, orange, bready",
    price: 5,
    alcoholContent: 5.6,
    pints: 124,
  },
];

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      beerList: beerList,
      addBeerButton: "",
    };
  }
  showNewBeerForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  hideNewBeerForum = () => {
    this.setState({ formVisibleOnPage: false });
  };

  handleAddingNewBeerToList = (newBeer) => {
    const newBeerList = this.state.BeerList.concat(newBeer);
    this.setState({ beerList: newBeerList });
    this.setState({ formVisibleOnPage: false });
  };

  render() {
    let currentlyVisibleState = null;
    let addBeerButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <div>
          <NewBeerForum
            onNewBeerCreation={this.handleAddingNewBeerToList}
          ></NewBeerForum>
          <Button onClick={() => this.hideNewBeerForum()}>
            Return to beers
          </Button>
        </div>
      );
    } else {
      currentlyVisibleState = (
        <div>
          <BeerList beerList={this.state.beerList} />
          <Button onClick={() => this.showNewBeerForum()}>
            Create a new beer
          </Button>
        </div>
      );
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addBeerButton}
      </React.Fragment>
    );
  }
}

export default BeerControl;
