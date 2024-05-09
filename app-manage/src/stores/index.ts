import { MutateFunction } from "@tanstack/react-query";
import { createStore } from "./useSkillStore";
import _ from "lodash";
import { ISkill, IStoreSkill } from "../service/api/useSkillAPI";

type Store = (
  nameStore: "skill",
  callback: (
    get: () => ISkill[],
    set: (set: (ISkill | ISkill[])) => void,
    send: (mutate: MutateFunction<unknown>) => void
  ) => void
) => void;

export const store: Store = (nameStore, callback) => {
  let dataAPI: any;

  const name = nameStore;
  const { getState } = createStore;
  const { setState } = createStore;

  return callback(
    () => {
      const result = getState();
      return result[name];
    },
    (set) => {
      dataAPI = set;
      const result = getState();
      const data = result[name];
      const equal = _.isEqual(set, data);
      if (!data || equal) return;
      if (Array.isArray(set)) {
        return setState({
          [name]: set,
        });
      }
      return setState({
        [name]: [...data, set],
      });
    },
    (mutate) => {
      return mutate(dataAPI);
    }
  );
  
};

type Callback = (state: IStoreSkill) => void;
let unsubscribe: (() => void) | undefined;

export const subStore = (callback: Callback) => {
  unsubscribe = createStore.subscribe((state) => {
    return callback(state);
  });
};

export const unsubStore = () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = undefined;
  }
};
