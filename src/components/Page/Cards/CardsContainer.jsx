import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "./Cards";
import {
  getPopUpIsVisibleState,
  getCollectionData,
  getCollectionIsLoading
} from "store/selectors";

class CardsContainer extends Component {
  render() {
    return (
      <Cards
        isPopUpVisible={this.props.isPopUpVisible}
        collectionData={this.props.collectionData}
        collectionIsLoading={this.props.collectionIsLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isPopUpVisible: getPopUpIsVisibleState(state),
    collectionData: getCollectionData(state),
    collectionIsLoading: getCollectionIsLoading(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
