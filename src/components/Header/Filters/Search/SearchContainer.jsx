import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "./Search";
import { putCardsData, setLoadingState } from "../../../app.actions";

class SearchContainer extends Component {
  render() {
    return (
      <Search
        putCardsData={this.props.putCardsData}
        setLoadingState={this.props.setLoadingState}
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return { putCardsData, setLoadingState };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
