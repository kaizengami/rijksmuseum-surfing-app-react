import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "./Cards";
import {
  getСardsData,
  getIsLoadingState,
  getPopUpIsVisibleState
} from "../../../store/selectors";

class CardsContainer extends Component {
  render() {
    return (
      <Cards
        cardsData={this.props.cardsData}
        isLoading={this.props.isLoading}
        isPopUpVisible={this.props.isPopUpVisible}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cardsData: getСardsData(state),
    isLoading: getIsLoadingState(state),
    isPopUpVisible: getPopUpIsVisibleState(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
