import React, { Component } from "react";
import { connect } from "react-redux";

import App from "./App";
import { putCardsData, setLoadingState } from "./app.actions";
import { getСardsData, getIsLoadingState } from "store/selectors";

interface Props {
  putCardsData(value: CardsData): object;
  setLoadingState(value: boolean): object;
  cardsData: object;
  isLoading: boolean;
  data: any;
}

interface CardsData {
  id: string;
  objectNumber: string;
  longTitle: string;
  headerImage: {
    url: string;
  };
}

interface State {}

class AppContainer extends Component<Props, State> {
  render() {
    return (
      <App
        putCardsData={this.props.putCardsData}
        cardsData={this.props.cardsData}
        setLoadingState={this.props.setLoadingState}
        isLoading={this.props.isLoading}
        data={this.props.data}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cardsData: getСardsData(state),
    isLoading: getIsLoadingState(state),
    data: state.saga
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
