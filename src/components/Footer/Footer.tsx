import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #222222;
  color: white;
  height: 20px;
  font-size: 10px;
`;

interface Props {}

interface State {}

class Footer extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <FooterWrapper>
          App was developed using the Rijksmuseum API
        </FooterWrapper>
      </>
    );
  }
}

export default Footer;
