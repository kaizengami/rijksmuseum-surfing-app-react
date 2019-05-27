import {
  REQUESTED_COLLECTION,
  REQUESTED_COLLECTION_SUCCEEDED,
  REQUESTED_COLLECTION_FAILED,
  REQUESTED_COLLECTION_DETAILS,
  REQUESTED_COLLECTION_DETAILS_SUCCEEDED,
  REQUESTED_COLLECTION_DETAILS_FAILED
} from "./sagas.actions";

const initialState = {
  data: [],
  loading: false,
  error: false,
  collectionDetailsData: [],
  collectionDetailsLoading: false,
  collectionDetailsError: false
};

export const sagaReducer = (state = initialState, action) => {
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

    case REQUESTED_COLLECTION_DETAILS:
      return {
        collectionDetailsData: [],
        collectionDetailsLoading: true,
        collectionDetailsError: false
      };
    case REQUESTED_COLLECTION_DETAILS_SUCCEEDED:
      return {
        collectionDetailsData: action.data,
        collectionDetailsLoading: false,
        collectionDetailsError: false
      };
    case REQUESTED_COLLECTION_DETAILS_FAILED:
      return {
        collectionDetailsData: [],
        collectionDetailsLoading: false,
        collectionDetailsError: true
      };
    default:
      return state;
  }
};
