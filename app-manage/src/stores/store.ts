import { useStore } from "./useStore";
import { Skill } from "./useStoreList";

type Store = (
  nameStore: "skills",
  callback: (
    get: () => void,
    set: (set: Skill) => void,
    sub: (sub: unknown) => void
  ) => void
) => void;

export const store: Store = (nameStore, callback) => {
  const dataAPI: string = "not data";
  const name = nameStore;
  const getState = useStore.getState;
  const setState = useStore.setState;
  const subscribe = useStore.subscribe;

  return callback(
    () => {
      const result = getState();
      console.log("req:", result);
      return result;
    },
    (set) => {
      const result = getState();
      const data = result[name];
      if (!data) return;
      setState({
        [name]: [...data, set],
      });
    },
    (sub) => {
      subscribe((state) => {
        console.log("sub:", state, sub);
      });
      return;
    }
  );
};
