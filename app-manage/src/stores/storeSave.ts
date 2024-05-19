import _ from "lodash";
import { KEY_STORE, stores } from "./stores";

export const storeSave = <T>(KEY_STORE: KEY_STORE, document: T | T[]) => {
  const { setState, getState } = stores;
  const store = getState();

  if (!Array.isArray(document)) {
    setState({
      [KEY_STORE]: [...store[KEY_STORE], document],
    });
    return;
  }

  const equal = _.isEqual(store[KEY_STORE], document);
  if (equal) return;
  setState({
    [KEY_STORE]: document,
  });
  return;
};

