import React, { Component } from "react";

import { CardWrapper, HeaderImage, LongTitle, CardLink } from "./card.styles";
import { Props, State } from "./card.interface";

class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  onClickCard = (e: any) => {
    let objectNumber = e.target.closest("a");
    console.log(objectNumber.name);
  };

  render() {
    const {
      headerImage: { url },
      longTitle,
      objectNumber
    } = this.props.cardData;
    return (
      <>
        <CardWrapper>
          <CardLink
            name={objectNumber}
            onClick={(e: any) => this.onClickCard(e)}
          >
            <HeaderImage background={url} />
          </CardLink>
          <LongTitle>{longTitle}</LongTitle>
        </CardWrapper>
      </>
    );
  }
}

export default Card;
