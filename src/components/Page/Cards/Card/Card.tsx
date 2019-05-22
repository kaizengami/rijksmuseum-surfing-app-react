import React, { Component } from "react";

import { CardWrapper, HeaderImage, LongTitle } from "./card.styles";
import { Props, State } from "./card.interface";

class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      headerImage: { url },
      longTitle
    } = this.props.cardData;

    return (
      <>
        <CardWrapper>
          <HeaderImage background={url} />
          <LongTitle>{longTitle}</LongTitle>
        </CardWrapper>
      </>
    );
  }
}

export default Card;
