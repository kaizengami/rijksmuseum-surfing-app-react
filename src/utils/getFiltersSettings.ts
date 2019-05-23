import { store } from "../index";

export function getFiltersSettings() {
  let settings = store.getState();
  return settings.filters;
}
