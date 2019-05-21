import { PUT_CARDS_DATA, SET_LOADING_STATE } from "./app.actions";

const defaultState = {
  data: [],
  isLoading: false
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PUT_CARDS_DATA:
      return {
        ...state,
        cardsData: action.payload
      };
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.payload
      };
  }
  return state;
};
