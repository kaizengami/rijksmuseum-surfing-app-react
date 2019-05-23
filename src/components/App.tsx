import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getCards } from "../utils/api";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CardsContainer from "./Page/Cards/CardsContainer";
import PopUp from "./Page/PopUp/PopUp";
import DetailsPage from "./Page/DetailsPage/DetailsPage";

import { Props, State } from "./app.interface";
import { GlobalStyles, AppWrapper, PageWrapper } from "./app.styles";

class App extends Component<Props, State> {
  constructor(props: Props) {
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
    return <CardsContainer />;
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <PageWrapper>
            <Switch>
              <Route exact path="/" render={this.cardsPage} />
              <Route path="/popup" component={PopUp} />
              <Route path="/detailspage" component={DetailsPage} />
            </Switch>
          </PageWrapper>
          <PopUp />
          <Footer />
        </AppWrapper>
      </>
    );
  }
}

export default connect()(App);
//export default App;
