import { PUT_CARDS_DATA, SET_LOADING_STATE } from "./app.actions";

const defaultState = {
  cardsData: [],
  isLoading: false
};

function putCardsData(state, carsData) {
  return {
    ...state,
    cardsData: carsData.payload
  };
}

function setLoadingState(state, loadingState) {
  return {
    ...state,
    isLoading: loadingState.payload
  };
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PUT_CARDS_DATA:
      return putCardsData(state, action);
    case SET_LOADING_STATE:
      return setLoadingState(state, action);
    default:
      return state;
  }
};
