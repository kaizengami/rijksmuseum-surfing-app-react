import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollection } from "sagas/sagas.actions";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cards from "./Page/Cards/Cards";
import PopUpContainer from "./Page/PopUp/PopUpContainer";
import DetailsPage from "./Page/DetailsPage/DetailsPage";

import { Props, State } from "./app.interface";
import { GlobalStyles, AppWrapper, PageWrapper } from "./app.styles";

class App extends Component<Props, State> {
  componentDidMount(): void {
    this.props.dispatch(fetchCollection());
  }

  cardsPage = (): JSX.Element => {
    return <Cards />;
  };

  render(): JSX.Element {
    return (
      <>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <PageWrapper>
            <Switch>
              <Route exact path="/" render={this.cardsPage} />
              <Route path="/detailspage" component={DetailsPage} />
            </Switch>
          </PageWrapper>
          <PopUpContainer />
          <Footer />
        </AppWrapper>
      </>
    );
  }
}

export default connect()(App);
