import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
`;

interface Props {}

interface State {}

class DetailsPage extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Wrapper>
          Details Page
          <Link to="/">Home page</Link>
        </Wrapper>
      </>
    );
  }
}

export default DetailsPage;
