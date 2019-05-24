export const SET_POPUP_ISVISIBLE_STATE = "SET_POPUP_ISVISIBLE_STATE";
export const SET_POPUP_DATA = "SET_POPUP_DATA";

export const setPopUpIsVisibleState = isVisible => ({
  type: SET_POPUP_ISVISIBLE_STATE,
  payload: isVisible
});

export const setPopUpData = popUpData => ({
  type: SET_POPUP_DATA,
  payload: popUpData
});
