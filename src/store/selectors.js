export function getCollectionIsLoading(state) {
  return state.sagaСollection.loading;
}

export function getCollectionData(state) {
  return state.sagaСollection.data;
}

export function getCollectionDetailsIsLoading(state) {
  return state.sagaСollectionDetails.loading;
}

export function getCollectionDetailsData(state) {
  return state.sagaСollectionDetails.data;
}

export function getСardsData(state) {
  return state.app.cardsData;
}

export function getIsLoadingState(state) {
  return state.app.isLoading;
}

export function getFiltersKeyword(state) {
  return state.filters.keyword;
}

export function getPopUpIsVisibleState(state) {
  return state.popUp.isVisible;
}

export function getPopUpData(state) {
  return state.popUp.popUpData;
}

//import * as appSelectors from "../components/app.selectors";

//const selectors = {};

// Object.keys(appSelectors).forEach(
//   funcName =>
//     (selectors[funcName] = state => appSelectors[funcName](state.navigation))
// );

// We want to be able to import like this: "import { name1, name2 } from 'selectors'"
// Below code behaves like "export {...selectors}" because of this relationship:
// var module = {}
// var exports = module.exports = {}
//module.exports = selectors;
