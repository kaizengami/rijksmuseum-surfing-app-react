export const REQUESTED_COLLECTION = "REQUESTED_COLLECTION";
export const REQUESTED_COLLECTION_SUCCEEDED = "REQUESTED_COLLECTION_SUCCEEDED";
export const REQUESTED_COLLECTION_FAILED = "REQUESTED_COLLECTION_FAILED";
export const FETCHED_COLLECTION = "FETCHED_COLLECTION";

export const REQUESTED_COLLECTION_DETAILS = "REQUESTED_COLLECTION_DETAILS";
export const REQUESTED_COLLECTION_DETAILS_SUCCEEDED =
  "REQUESTED_COLLECTION_DETAILS_SUCCEEDED";
export const REQUESTED_COLLECTION_DETAILS_FAILED =
  "REQUESTED_COLLECTION_DETAILS_FAILED";
export const FETCHED_COLLECTION_DETAILS = "FETCHED_COLLECTION_DETAILS";

export const requestCollection = () => {
  return { type: "REQUESTED_COLLECTION" };
};

export const requestCollectionSuccess = data => {
  return { type: "REQUESTED_COLLECTION_SUCCEEDED", data: data.artObjects };
};

export const requestCollectionError = () => {
  return { type: "REQUESTED_COLLECTION_FAILED" };
};

export const fetchCollection = () => {
  return { type: "FETCHED_COLLECTION" };
};

export const requestCollectionDetails = () => {
  return { type: "REQUESTED_COLLECTION_DETAILS" };
};

export const requestCollectionDetailsSuccess = data => {
  return {
    type: "REQUESTED_COLLECTION_DETAILS_SUCCEEDED",
    data: data.artObject
  };
};

export const requestCollectionDetailsError = () => {
  return { type: "REQUESTED_COLLECTION_DETAILS_FAILED" };
};

export const fetchCollectionDetails = objectNumber => {
  return { type: "FETCHED_COLLECTION_DETAILS", objectNumber };
};
