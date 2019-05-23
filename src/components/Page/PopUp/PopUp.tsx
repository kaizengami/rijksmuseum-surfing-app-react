import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: aqua;
  text-align: center;
  font-size: 30px;
  opacity: 0.2;
`;

interface Props {}

interface State {}

class PopUp extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return ReactDOM.createPortal(<Wrapper>Pop-up</Wrapper>, document.body);
  }
}

export default PopUp;
