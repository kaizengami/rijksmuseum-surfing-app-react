import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
`;

class DetailsPage extends Component {
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
