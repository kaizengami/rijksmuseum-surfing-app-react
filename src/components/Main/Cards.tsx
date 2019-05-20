import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
`;

interface Props {}

interface State {}

class Cards extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Wrapper>
          Cards
          <Link to="/detailspage">details page</Link>
        </Wrapper>
      </>
    );
  }
}

export default Cards;
