import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "./Search";
import { putCardsData, setLoadingState } from "../../../app.actions";
import { setSearchKeyword } from "../filters.actions";

class SearchContainer extends Component {
  render() {
    return (
      <Search
        putCardsData={this.props.putCardsData}
        setLoadingState={this.props.setLoadingState}
        setSearchKeyword={this.props.setSearchKeyword}
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  putCardsData,
  setLoadingState,
  setSearchKeyword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
