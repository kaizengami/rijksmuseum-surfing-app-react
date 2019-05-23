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

export function getСardsData(state) {
  return state.app.cardsData;
}

export function getIsLoadingState(state) {
  return state.app.isLoading;
}

export function getFiltersKeyword(state) {
  return state.filters.keyword;
}
