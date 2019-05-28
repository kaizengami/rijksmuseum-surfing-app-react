import { SET_POPUP_ISVISIBLE_STATE, SET_POPUP_DATA } from "./popup.actions";

const defaultState = {
  isVisible: false,
  popUpData: null
};

function setIsVisibleState(state, isVisible) {
  return {
    ...state,
    isVisible: isVisible.payload
  };
}

function setPopUpData(state, isVisible) {
  return {
    ...state,
    popUpData: isVisible.payload
  };
}

export const popUpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_POPUP_ISVISIBLE_STATE:
      return setIsVisibleState(state, action);
    case SET_POPUP_DATA:
      return setPopUpData(state, action);
    default:
      return state;
  }
};
