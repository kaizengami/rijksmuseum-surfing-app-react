import React, { Component } from "react";
import { connect } from "react-redux";

import { SearchWrapper, SearchIcon, SearchInput } from "./search.styles";

import { fetchCollection } from "sagas/sagas.actions";
// import { putCardsData, setLoadingState } from "components/app.actions";
// import { setSearchKeyword } from "components/Header/Filters/filters.actions";

interface Props {
  putCardsData(value: any): object;
  setLoadingState(value: boolean): object;
  setSearchKeyword(value: any): object;
  dispatch(action: any): void;
}

interface State {}

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
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

  upDateCards() {
    this.props.dispatch(fetchCollection());
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

export default connect()(Search);
