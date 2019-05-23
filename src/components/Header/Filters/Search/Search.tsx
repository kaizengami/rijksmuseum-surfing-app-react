import React, { Component } from "react";

import { SearchWrapper, SearchIcon, SearchInput } from "./search.styles";

import { getCards } from "../../../../utils/api";

interface Props {
  putCardsData(value: any): object;
  setLoadingState(value: boolean): object;
  setSearchKeyword(value: any): object;
  isLoading: boolean;
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
      const inputValue = e.target.value.trim();
      if (this.isValidName(value)) {
        this.props.setSearchKeyword(inputValue);
        this.upDateCards();
      }
    }
  };

  async upDateCards() {
    this.props.setLoadingState(true);
    let cards = await getCards();
    this.props.putCardsData(cards);
    this.props.setLoadingState(false);
  }

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
