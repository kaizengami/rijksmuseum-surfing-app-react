import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "./Cards";
import { getСardsData, getIsLoadingState } from "../../../store/selectors";

class CardsContainer extends Component {
  render() {
    return (
      <Cards
        cardsData={this.props.cardsData}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cardsData: getСardsData(state),
    isLoading: getIsLoadingState(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
