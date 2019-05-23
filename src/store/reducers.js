import { combineReducers } from "redux";

import { appReducer } from "../components/app.reducers";
import { filtersReducer } from "../components/Header/Filters/filters.reducers";

export default combineReducers({
  app: appReducer,
  filters: filtersReducer
});
