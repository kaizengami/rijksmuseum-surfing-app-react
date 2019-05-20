import React, { Component } from "react";

interface Props {}

interface State {}

class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="header">header</div>;
  }
}

export default Header;
