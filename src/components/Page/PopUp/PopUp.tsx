import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { store } from "index";

import { PopUpWrapper, Image, BottomButtons, Button } from "./popup.styles";

interface Props {
  isVisible: boolean;
}

interface State {}

class PopUp extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  onClickClose = (e: any) => {
    console.log("close popup " + e.target.value);
    store.dispatch({ type: "SET_POPUP_ISVISIBLE_STATE", payload: false });
  };
  onClickShowDetails = (e: any) => {
    console.log("Show Details");
    //hashHistory.push("/detailspage");
    //store.dispatch({ type: "SET_POPUP_ISVISIBLE_STATE", payload: false });
  };

  render() {
    let storeData = store.getState();
    let popUpData = storeData.popUp.popUpData;
    let imageUrl;
    if (popUpData != null) {
      imageUrl = popUpData.webImage.url;
    }
    //let url = popUpData.webImage.url
    console.log(popUpData);
    return this.props.isVisible
      ? ReactDOM.createPortal(
          <PopUpWrapper>
            <Image src={imageUrl} />
            <BottomButtons>
              <Button value="close" onClick={(e: any) => this.onClickClose(e)}>
                close
              </Button>
              <Button
                value="close"
                onClick={(e: any) => this.onClickShowDetails(e)}
              >
                view details
              </Button>
            </BottomButtons>
          </PopUpWrapper>,
          document.body
        )
      : null;
  }
}

export default connect()(PopUp);
