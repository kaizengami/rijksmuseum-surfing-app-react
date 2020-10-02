import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { store } from "index";

import { PopUpWrapper, Image, BottomButtons, Button } from "./popup.styles";
import {
  getCollectionDetailsData,
  getCollectionDetailsIsLoading,
} from "store/selectors";

interface Props {
  isVisible: boolean;
  getCollectionDetailsData?: any;
  getCollectionDetailsIsLoading?: any;
}

interface State {}

class PopUp extends Component<Props, State> {
  onClickClose = () => {
    store.dispatch({ type: "SET_POPUP_ISVISIBLE_STATE", payload: false });
  };
  onClickShowDetails = () => {
    console.log("Show Details");
  };

  render() {
    let popUpData = this.props.getCollectionDetailsData;
    let imageUrl;
    if (popUpData != null) {
      imageUrl = popUpData.webImage.url;
    }
    return this.props.isVisible
      ? ReactDOM.createPortal(
          <PopUpWrapper>
            {this.props.getCollectionDetailsIsLoading && <div>Loading...</div>}

            <Image src={imageUrl} />

            <BottomButtons>
              <Button value="close" onClick={() => this.onClickClose()}>
                close
              </Button>
              <Button value="close" onClick={() => this.onClickShowDetails()}>
                view details
              </Button>
            </BottomButtons>
          </PopUpWrapper>,
          document.body
        )
      : null;
  }
}

const mapStateToProps = (state: any) => {
  return {
    getCollectionDetailsData: getCollectionDetailsData(state),
    getCollectionDetailsIsLoading: getCollectionDetailsIsLoading(state),
  };
};

export default connect(mapStateToProps, null)(PopUp);
