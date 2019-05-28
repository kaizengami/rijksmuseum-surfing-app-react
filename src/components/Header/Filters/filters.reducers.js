import { SET_FILTERS_KEYWORD } from "./filters.actions";

const defaultState = {
  keyword: ""
};

function setFilterKeyword(state, loadingState) {
  return {
    ...state,
    keyword: loadingState.payload
  };
}

export const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTERS_KEYWORD:
      return setFilterKeyword(state, action);
    default:
      return state;
  }
};
