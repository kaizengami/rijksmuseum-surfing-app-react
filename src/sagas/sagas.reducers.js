import {
  REQUESTED_COLLECTION,
  REQUESTED_COLLECTION_SUCCEEDED,
  REQUESTED_COLLECTION_FAILED,
  REQUESTED_COLLECTION_DETAILS,
  REQUESTED_COLLECTION_DETAILS_SUCCEEDED,
  REQUESTED_COLLECTION_DETAILS_FAILED
} from "./sagas.actions";

const initialStateСollection = {
  data: [],
  loading: false,
  error: false
};

const initialStateСollectionDetails = {
  data: null,
  loading: false,
  error: false
};

export const sagaСollectionReducer = (
  state = initialStateСollection,
  action
) => {
  switch (action.type) {
    case REQUESTED_COLLECTION:
      return {
        data: [],
        loading: true,
        error: false
      };
    case REQUESTED_COLLECTION_SUCCEEDED:
      return {
        data: action.data,
        loading: false,
        error: false
      };
    case REQUESTED_COLLECTION_FAILED:
      return {
        data: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export const sagaСollectionDetailsReducer = (
  state = initialStateСollectionDetails,
  action
) => {
  switch (action.type) {
    case REQUESTED_COLLECTION_DETAILS:
      return {
        data: null,
        loading: true,
        error: false
      };
    case REQUESTED_COLLECTION_DETAILS_SUCCEEDED:
      return {
        data: action.data,
        loading: false,
        error: false
      };
    case REQUESTED_COLLECTION_DETAILS_FAILED:
      return {
        data: null,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
