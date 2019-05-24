import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import CardContainer from "./Card/CardContainer";
import { Spinner } from "../../LoadingAnimation";

import { CardsWrapper } from "./cards.styles";
import { Props, State } from "./cards.interface";
import Card from "./Card/Card";

import { setPopUpIsVisibleState, setPopUpData } from "../PopUp/popup.actions";

class Cards extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.cardsData);
    return (
      <>
        <CardsWrapper isPopUpVisible={this.props.isPopUpVisible}>
          {this.props.isLoading ? (
            <Spinner />
          ) : (
            <>
              {this.props.cardsData &&
                this.props.cardsData.length &&
                this.props.cardsData.map((cardData: any) => (
                  <Card
                    cardData={cardData}
                    setPopUpIsVisibleState={this.props.setPopUpIsVisibleState}
                    setPopUpData={this.props.setPopUpData}
                    key={cardData.objectNumber}
                  />
                  // <CardContainer
                  //   cardData={cardData}
                  //   key={cardData.objectNumber}
                  // />
                ))}
              <Link to="/detailspage">details page</Link>
            </>
          )}
        </CardsWrapper>
      </>
    );
  }
}

const mapDispatchToProps = {
  setPopUpIsVisibleState,
  setPopUpData
};

export default connect(
  null,
  mapDispatchToProps
)(Cards);
