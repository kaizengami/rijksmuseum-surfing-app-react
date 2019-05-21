export const PUT_CARDS_DATA = "PUT_CARDS_DATA";
export const SET_LOADING_STATE = "SET_LOADING_STATE";

export const putCardsData = cardsData => ({
  type: PUT_CARDS_DATA,
  payload: cardsData
});

export const setLoadingState = isLoading => ({
  type: SET_LOADING_STATE,
  payload: isLoading
});
