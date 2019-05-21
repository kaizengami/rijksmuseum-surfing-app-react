import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
`;

interface Props {}

interface State {}

class PopUp extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Wrapper>Pop-up</Wrapper>
      </>
    );
  }
}

export default PopUp;
