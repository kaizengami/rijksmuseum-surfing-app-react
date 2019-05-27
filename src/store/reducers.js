import { combineReducers } from "redux";

import { appReducer } from "components/app.reducers";
import { filtersReducer } from "components/Header/Filters/filters.reducers";
import { popUpReducer } from "components/Page/PopUp/popup.reducers";
import { sagaReducer } from "sagas/sagas.reducers";

export default combineReducers({
  app: appReducer,
  filters: filtersReducer,
  popUp: popUpReducer,
  saga: sagaReducer
});
