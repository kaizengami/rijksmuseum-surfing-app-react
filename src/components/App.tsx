import React, { Component } from "react";

import "./App.scss";

interface Props {}

interface State {
  settings: {
    cardsPerPage: number;
  };
  filters: {
    search: string;
    maker: string;
    type: string;
    material: string;
  };
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      settings: {
        cardsPerPage: 10
      },
      filters: {
        search: "",
        maker: "",
        type: "",
        material: ""
      }
    };
  }

  render() {
    return <div className="app">test</div>;
  }
}

export default App;
