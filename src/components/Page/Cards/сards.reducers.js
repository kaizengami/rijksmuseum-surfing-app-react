import { ACTION_PUT_CARDS_DATA } from "./app.actions";

const defaultState = {
  data: []
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_PUT_CARDS_DATA:
      return {
        ...state,
        cardsData: action.payload
      };
  }
  return state;
};
