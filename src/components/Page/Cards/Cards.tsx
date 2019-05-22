import React, { Component } from "react";

import { Link } from "react-router-dom";
import Card from "./Card/Card";
import { Spinner } from "../../LoadingAnimation";

import { CardsWrapper } from "./cards.styles";
import { Props, State } from "./cards.interface";

class Cards extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.cardsData);
    return (
      <>
        <CardsWrapper>
          {this.props.isLoading ? (
            <Spinner />
          ) : (
            <>
              {this.props.cardsData &&
                this.props.cardsData.map((cardData: any) => (
                  <Card cardData={cardData} key={cardData.objectNumber} />
                ))}
              <Link to="/detailspage">details page</Link>
            </>
          )}
        </CardsWrapper>
      </>
    );
  }
}

export default Cards;
