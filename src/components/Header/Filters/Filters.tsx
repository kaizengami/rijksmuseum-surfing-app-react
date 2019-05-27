import React, { Component } from "react";
import styled from "styled-components";
import Search from "./Search/SearchContainer";

const FiltersWrapper = styled.div``;

interface Props {}

interface State {}

class Filters extends Component<Props, State> {
  render() {
    return (
      <FiltersWrapper>
        <Search />
      </FiltersWrapper>
    );
  }
}

export default Filters;
