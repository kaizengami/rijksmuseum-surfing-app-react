import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { getCards } from "../utils/api";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CardsContainer from "./Page/Cards/CardsContainer";
import PopUp from "./Page/PopUp/PopUp";
import DetailsPage from "./Page/DetailsPage/DetailsPage";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Helvetica";
    src: url("../fonts/helvetica_neue_regular.ttf");
  }

  body,
  html {
    font-family: Helvetica;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 0px;
    background-color: #EEEEEE;
    overflow-x: hidden;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 10px;
`;

interface Props {
  putCardsData: any;
  setLoadingState: any;
  store: any;
  isLoading: boolean;
}

interface State {}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    this.props.setLoadingState(true);
    let cards = await getCards();
    this.props.putCardsData(cards);
    this.props.setLoadingState(false);
  }

  cardsPage = () => {
    return <CardsContainer isLoading cardsData />;
  };

  render() {
    console.log(this.props);
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <MainWrapper>
            <Switch>
              <Route exact path="/" render={this.cardsPage} />
              <Route path="/popup" component={PopUp} />
              <Route path="/detailspage" component={DetailsPage} />
            </Switch>
          </MainWrapper>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default App;
