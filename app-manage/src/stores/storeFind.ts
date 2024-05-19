import { KEY_STORE, stores } from "./stores";

export const storeFind = (
  KEY_STORE: KEY_STORE,
  callback: (store: object[]) => void
) => {
  const { getState } = stores;
  const store = getState();
  return callback(store[KEY_STORE]);
};
