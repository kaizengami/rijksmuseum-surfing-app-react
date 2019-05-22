import React, { Component } from "react";
import styled from "styled-components";
import SearchContainer from "./Search/SearchContainer";

const FiltersWrapper = styled.div``;

interface Props {}

interface State {}

class Filters extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <FiltersWrapper>
        <SearchContainer />
      </FiltersWrapper>
    );
  }
}

export default Filters;
