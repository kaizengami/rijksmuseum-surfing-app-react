import React, { Component } from "react";

import { SearchWrapper, SearchIcon, SearchInput } from "./search.styles";

interface Props {
  putCardsData(value: any): object;
  setLoadingState(value: boolean): object;
}

interface State {}

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  submitInput = (e: any) => {
    const value = e.target.value;
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      //const inputValue = e.target.value.trim();
      if (this.isValidName(value)) {
        console.log("submit");
        this.props.setLoadingState(true);
      }
    }
  };

  isValidName(name: string) {
    return !!name && !/\d/.test(name);
  }

  render() {
    return (
      <>
        <SearchWrapper>
          <SearchIcon />
          <SearchInput
            id="search"
            name="search"
            type="text"
            //ref={this.input}
            placeholder="Search"
            autoComplete="off"
            onKeyUp={e => this.submitInput(e)}
          />
        </SearchWrapper>
      </>
    );
  }
}

export default Search;
