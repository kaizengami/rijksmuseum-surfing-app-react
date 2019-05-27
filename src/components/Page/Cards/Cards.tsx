import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import CardContainer from "./Card/CardContainer";
import { Spinner } from "components/LoadingAnimation/index";

import { CardsWrapper } from "./cards.styles";
import { Props, State } from "./cards.interface";
import Card from "./Card/Card";

import { setPopUpIsVisibleState, setPopUpData } from "../PopUp/popup.actions";
import {
  getPopUpIsVisibleState,
  getCollectionData,
  getCollectionIsLoading
} from "store/selectors";

class Cards extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <CardsWrapper isPopUpVisible={this.props.isPopUpVisible}>
          {this.props.collectionIsLoading ? (
            <Spinner />
          ) : (
            <>
              {this.props.collectionData &&
                this.props.collectionData.length &&
                this.props.collectionData.map((cardData: any) => (
                  <Card
                    cardData={cardData}
                    setPopUpIsVisibleState={this.props.setPopUpIsVisibleState}
                    setPopUpData={this.props.setPopUpData}
                    key={cardData.objectNumber}
                  />
                ))}
              <Link to="/detailspage">details page</Link>
            </>
          )}
        </CardsWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isPopUpVisible: getPopUpIsVisibleState(state),
    collectionData: getCollectionData(state),
    collectionIsLoading: getCollectionIsLoading(state)
  };
};

const mapDispatchToProps = {
  setPopUpIsVisibleState,
  setPopUpData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
