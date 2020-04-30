import React from "react";
import { v4 } from "uuid";
import BeerList from "./BeerList";
import NewBeerForum from "./NewBeerForum";
import { Button, Container, Grid } from "@material-ui/core";
import BeerDetail from "./BeerDetail";
import EditBeerForum from "./EditBeerForum";
import { makeStyles, CardMedia } from "@material-ui/core";
import beer from "../assets/img/beer.jpg";

const styles = makeStyles({
  center: {
    justifyContent: "center",
  },
});

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
    color: "Something",
    aroma: "Something",
    flavor: "Something",
    price: 5,
    alcoholContent: 5.6,
    pints: 1,
  },
];

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listAvailableOnPage: true,
      formVisibleOnPage: false,
      editFormVisibleOnPage: false,
      detailVisibleOnPage: false,
      selectedBeer: null,
      beerList: beerList,
      addBeerButton: "",
      disableButton: null,
    };
  }

  showNewBeerForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  hideNewBeerForum = () => {
    this.setState({ formVisibleOnPage: false });
  };
  showBeerDetail = (id) => {
    const beer = this.state.beerList.filter((entry) => entry.id === id)[0];
    this.setState({ selectedBeer: beer });
  };
  hideBeerDetail = () => {
    this.setState({ detailVisibleOnPage: false });
    this.setState({ selectedBeer: null });
  };
  showEditBeerForum = (id) => {
    const beer = this.state.beerList.filter((entry) => entry.id === id)[0];
    this.setState({ selectedBeer: beer });
    this.setState({ editing: true });
  };
  hideEditBeerForum = () => {
    this.setState({ editing: false });
    this.setState({ selectedBeer: null });
  };

  handleAddingNewBeerToList = (newBeer) => {
    const newBeerList = this.state.beerList.concat(newBeer);
    this.setState({ beerList: newBeerList });
    this.setState({ formVisibleOnPage: false });
  };

  handleEditingBeer = (editBeer) => {
    let newBeerList = this.state.beerList.map((entry) => entry);
    let editBeerIndex = newBeerList.indexOf(
      newBeerList.find((entry) => entry.id === editBeer.id)
    );
    newBeerList[editBeerIndex] = editBeer;
    this.setState({ beerList: newBeerList });
    this.setState({ editing: false });
    this.setState({ selectedBeer: null });
  };

  handleIncrementingBeerPints = (id) => {
    let newBeerList = this.state.beerList.map((entry) => entry);
    newBeerList.find((entry) => entry.id === id).pints += 1;
    this.setState({ beerList: newBeerList });
  };
  handleDecrementingBeerPints = (id) => {
    let newBeerList = this.state.beerList.map((entry) => entry);
    newBeerList.find((entry) => entry.id === id).pints -= 1;
    this.setState({ beerList: newBeerList });
  };

  handleRemovingBeerFromList = (id) => {
    const newBeerList = this.state.beerList.filter((entry) => entry.id !== id);
    this.setState({ beerList: newBeerList });
  };

  render() {
    let currentlyVisibleState = null;
    let addBeerButton = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <div>
          <EditBeerForum
            onEditBeer={this.handleEditingBeer}
            beer={this.state.selectedBeer}
          ></EditBeerForum>
          <Button onClick={() => this.hideEditBeerForum()}>
            Return to beers
          </Button>
        </div>
      );
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = (
        <div>
          <BeerDetail beer={this.state.selectedBeer}></BeerDetail>
          <Button onClick={() => this.hideBeerDetail()}>Return to beers</Button>
        </div>
      );
    } else if (this.state.formVisibleOnPage) {
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
          <BeerList
            onBeerPintIncrement={this.handleIncrementingBeerPints}
            onBeerPintDecrement={this.handleDecrementingBeerPints}
            onShowBeerDetail={this.showBeerDetail}
            onRemoveBeer={this.handleRemovingBeerFromList}
            onShowEditBeer={this.showEditBeerForum}
            beerList={this.state.beerList}
          />
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.showNewBeerForum()}
          >
            Add beer
          </Button>
        </div>
      );
    }
    return (
      <Container className={styles.center}>
        <Grid container>
          <Grid item xs={12}>
            <CardMedia style={{ height: 500 }} image={beer}></CardMedia>
            {currentlyVisibleState}
            {addBeerButton}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default BeerControl;
