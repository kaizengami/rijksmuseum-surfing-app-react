import React, { Component } from "react";
import styled from "styled-components";
import Filters from "./Filters/Filters";

const HeaderWrapper = styled.header``;

interface Props {}

interface State {}

class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderWrapper>
          <Filters />
        </HeaderWrapper>
      </>
    );
  }
}

export default Header;
