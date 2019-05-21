import React, { Component } from "react";
import { connect } from "react-redux";

import App from "./App";
import { putCardsData, setLoadingState } from "./app.actions";

class AppContainer extends Component {
  render() {
    return (
      <App
        putCardsData={this.props.putCardsData}
        cardsData={this.props.cardsData}
        setLoadingState={this.props.setLoadingState}
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

const mapDispatchToProps = {
  putCardsData,
  setLoadingState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
