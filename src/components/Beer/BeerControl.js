import React from "react";
import { v4 } from "uuid";
import { NewBeerForm } from "./NewBeerForm";
import { Button } from "@material-ui/core";
import { BeerDetail } from "./BeerDetail";
import { BeerList } from "./BeerList";
import { EditBeerForm } from "./EditBeerForm";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listAvailableOnPage: true,
      formVisibleOnPage: false,
      editFormVisibleOnPage: false,
      detailVisibleOnPage: false,
      selectedBeer: null,
      disableButton: null,
    };
  }

  showNewBeerForm = () => {
    this.setState({ formVisibleOnPage: true });
  };
  hideNewBeerForm = () => {
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
  showEditBeerForm = (id) => {
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
        <>
          <EditBeerForm
            onEditBeer={this.handleEditingBeer}
            beer={this.state.selectedBeer}
          ></EditBeerForm>
          <Button onClick={() => this.hideEditBeerForum()}>
            Return to beers
          </Button>
        </>
      );
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = (
        <>
          <BeerDetail beer={this.state.selectedBeer}></BeerDetail>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.hideBeerDetail()}
          >
            Return to beers
          </Button>
        </>
      );
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <>
          <NewBeerForm
            onNewBeerCreation={this.handleAddingNewBeerToList}
          ></NewBeerForm>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.hideNewBeerForum()}
          >
            Return to beers
          </Button>
        </>
      );
    } else {
      currentlyVisibleState = (
        <>
          <BeerList
            onBeerPintIncrement={this.handleIncrementingBeerPints}
            onBeerPintDecrement={this.handleDecrementingBeerPints}
            onShowBeerDetail={this.showBeerDetail}
            onRemoveBeer={this.handleRemovingBeerFromList}
            onShowEditBeer={this.showEditBeerForm}
            onShowNewBeerForm={this.showNewBeerForm}
            beerList={this.state.beerList}
          />
        </>
      );
    }
    return <>{currentlyVisibleState}</>;
  }
}

export default BeerControl;
