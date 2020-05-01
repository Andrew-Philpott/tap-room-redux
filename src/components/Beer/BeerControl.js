import React from "react";
import { v4 } from "uuid";
import { NewBeerForm } from "./NewBeerForm";
import { Button } from "@material-ui/core";
import { BeerDetail } from "./BeerDetail";
import { BeerList } from "./BeerList";
import { EditBeerForm } from "./EditBeerForm";
import { connect } from "react-redux";
import * as a from "../../actions";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNewBeerFormSubmission = (newBeer) => {
    const { dispatch } = this.props;
    dispatch(a.newBeer(newBeer));
    dispatch(a.toggleNewBeerFormVisibility());
  };

  handleNewBeerFormDisplay = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleNewBeerFormVisibility());
  };

  handleEditBeerFormSubmission = (editBeer) => {
    const { dispatch } = this.props;
    dispatch(a.updateBeer(editBeer));
    dispatch(a.toggleEditBeerFormVisibility());
  };

  handleEditBeerFormDisplay = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleEditBeerFormVisibility());
  };

  handleSelectBeer = (id) => {
    const { dispatch } = this.props;
    if (id === undefined) {
      dispatch(a.deselectBeer());
    } else {
      const beer = this.props.beerList[id];
      dispatch(a.selectBeer(beer));
    }
  };

  handleDeleteBeer = (id) => {
    const { dispatch } = this.props;
    dispatch(a.deleteBeer(id));
  };

  handleIncrementingBeerPints = (id) => {
    const { dispatch } = this.props;
    dispatch(a.increaseBeerPintQuantity(id));
  };

  handleDecrementingBeerPints = (id) => {
    const { dispatch } = this.props;
    dispatch(a.decreaseBeerPintQuantity(id));
  };

  render() {
    let currentlyVisibleState = null;
    if (this.props.editBeerForm) {
      currentlyVisibleState = (
        <>
          <EditBeerForm
            onEditBeerFormSubmission={this.handleEditBeerFormSubmission}
            beer={this.props.selectBeer}
          ></EditBeerForm>
          <Button onClick={() => this.handleEditBeerFormDisplay()}>
            Return to beers
          </Button>
        </>
      );
    } else if (this.props.selectBeer != null) {
      currentlyVisibleState = (
        <>
          <BeerDetail beer={this.props.selectBeer}></BeerDetail>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.handleSelectBeer()}
          >
            Return to beers
          </Button>
        </>
      );
    } else if (this.props.newBeerForm) {
      currentlyVisibleState = (
        <>
          <NewBeerForm
            onNewBeerFormSubmission={this.handleNewBeerFormSubmission}
          ></NewBeerForm>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.handleNewBeerFormDisplay()}
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
            onDisplayBeerDetail={this.handleSelectBeer}
            onDeleteBeer={this.handleDeleteBeer}
            onDisplayEditBeerForm={this.handleEditBeerFormDisplay}
            onDisplayNewBeerForm={this.handleNewBeerFormDisplay}
            beerList={this.props.beerList}
          />
        </>
      );
    }
    return <>{currentlyVisibleState}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    beerList: state.beerList,
    newBeerForm: state.newBeerForm,
    editBeerForm: state.editBeerForm,
    selectBeer: state.selectBeer,
  };
};

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;
