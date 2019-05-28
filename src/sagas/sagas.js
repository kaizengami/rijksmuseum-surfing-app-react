import { put, takeEvery, call, all } from "redux-saga/effects";
import {
  requestCollection,
  requestCollectionSuccess,
  requestCollectionError,
  requestCollectionDetails,
  requestCollectionDetailsSuccess,
  requestCollectionDetailsError
} from "./sagas.actions";

import { getFiltersSettings } from "utils/getFiltersSettings";

const API_KEY = "0zZyVckt";

export function* watchFetchCollection() {
  yield all([
    takeEvery("FETCHED_COLLECTION", fetchCollectionAsync),
    takeEvery("FETCHED_COLLECTION_DETAILS", fetchCollectionDetailsAsync)
  ]);
}

function* fetchCollectionAsync() {
  let filters = getFiltersSettings();
  let cardsPerPage = 10;
  try {
    yield put(requestCollection());
    const data = yield call(() => {
      return fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&format=json&ps=${cardsPerPage}
        &q=${filters.keyword}`).then(res => res.json());
    });
    yield put(requestCollectionSuccess(data));
  } catch (error) {
    yield put(requestCollectionError());
  }
}

function* fetchCollectionDetailsAsync(param) {
  try {
    yield put(requestCollectionDetails());
    const data = yield call(() => {
      return fetch(
        `https://www.rijksmuseum.nl/api/nl/collection/${
          param.objectNumber
        }?key=${API_KEY}&format=json`
      ).then(res => res.json());
    });
    yield put(requestCollectionDetailsSuccess(data));
  } catch (error) {
    yield put(requestCollectionDetailsError());
  }
}
