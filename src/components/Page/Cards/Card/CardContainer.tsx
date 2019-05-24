import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";
//import { getСardsData, getIsLoadingState } from "../../../store/selectors";
import {
  setPopUpIsVisibleState,
  setPopUpData
} from "../../PopUp/popup.actions";
//import { getСardsData } from "../../../../store/selectors";

interface Props {
  setPopUpIsVisibleState(value: boolean): void;
  cardData: any;
  setPopUpData: any;
}

interface State {}

class CardContainer extends Component<Props, State> {
  render() {
    return (
      <Card
        cardData={this.props.cardData}
        setPopUpIsVisibleState={this.props.setPopUpIsVisibleState}
        setPopUpData={this.props.setPopUpData}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = {
  setPopUpIsVisibleState,
  setPopUpData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);

//export default 1;
