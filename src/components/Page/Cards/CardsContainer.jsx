import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "./Cards";
//import { } from "./cards.actions";

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
    cardsData: state.app.cardsData,
    isLoading: state.app.isLoading
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer);
