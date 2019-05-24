import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../../../index";
import { getCardDetails } from "../../../../utils/api";

import { CardWrapper, HeaderImage, LongTitle, CardLink } from "./card.styles";
import { Props, State } from "./card.interface";

class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  onClickCard = (e: any, fakeObjectNumber: string) => {
    // let objectNumber = e.target.closest("a");
    // console.log(objectNumber.name);
    this.updatePopUp(fakeObjectNumber);
  };

  async updatePopUp(objectNumber: string) {
    let popUpData = await getCardDetails(objectNumber);
    this.props.setPopUpData(popUpData);
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
