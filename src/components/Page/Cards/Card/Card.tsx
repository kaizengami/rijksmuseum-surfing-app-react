import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionDetails } from "sagas/sagas.actions";

import { CardWrapper, HeaderImage, LongTitle, CardLink } from "./card.styles";
import { Props, State } from "./card.interface";

class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  onClickCard = (e: any, objectNumber: string) => {
    this.updatePopUp(objectNumber);
  };

  updatePopUp(objectNumber: string) {
    this.props.dispatch(fetchCollectionDetails(objectNumber));
    this.props.setPopUpIsVisibleState(true);
  }

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
            onClick={(e: any) => this.onClickCard(e, objectNumber)}
          >
            <HeaderImage background={url} />
          </CardLink>
          <LongTitle>{longTitle}</LongTitle>
        </CardWrapper>
      </>
    );
  }
}

//export default Card;
export default connect()(Card);
