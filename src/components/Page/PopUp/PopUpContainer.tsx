import React, { Component } from "react";
import { connect } from "react-redux";

import PopUp from "./PopUp";
// import { getPopUpIsVisibleState } from "../../../store/selectors";
//import { putCardsData, setLoadingState } from "./popup.actions";
import { getPopUpIsVisibleState } from "../../../store/selectors";

interface Props {
  isVisible: boolean;
}

interface State {}

class PopUpContainer extends Component<Props, State> {
  render() {
    return <PopUp isVisible={this.props.isVisible} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    isVisible: getPopUpIsVisibleState(state)
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUpContainer);
