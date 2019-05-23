import React, { Component } from "react";
import { connect } from "react-redux";

import App from "./App";
import { putCardsData, setLoadingState } from "./app.actions";
import { getСardsData, getIsLoadingState } from "../store/selectors";

interface Props {
  putCardsData(value: CardsData): object;
  setLoadingState(value: boolean): object;
  cardsData: object;
  isLoading: boolean;
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
  // componentDidMount = () => {
  //   this.props.dispatch({ type: "HELLO_THERE", payload: { "1": "1111" } });
  // };

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

const mapStateToProps = (state: any) => {
  return {
    cardsData: getСardsData(state),
    isLoading: getIsLoadingState(state)
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
