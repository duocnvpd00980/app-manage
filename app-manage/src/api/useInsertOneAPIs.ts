import { createStore } from "../stores/useSkillStore";

export const useInsertOneAPIs = (key: string, fn: T) => {
  const dataStore = createStore.getState();
  return {
    mutationFn: fn,
    onMutate: (variables: T) => {
      variables.id = key;
      createStore.setState({
        [key]: variables,
      });
      return variables.id;
    },
    onSuccess: (result: T, variables: T, context: T) => {
      const updateState = dataStore[key].map((item: T) =>
        item.id === context ? result : item
      );
      createStore.setState({
        [key]: updateState,
      });
    },
    onError: (error: T, variables: T, context: T) => {
      const deleteSkill = dataStore[key].filter(
        (item: T) => item.id !== context
      );
      createStore.setState({
        [key]: deleteSkill,
      });
    },
  };
};
