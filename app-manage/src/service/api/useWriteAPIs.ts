import { createStore } from "../../stores/useSkillStore";

export const useWriteApis = (key: string, fn: T) => {
  return {
    mutationFn: fn,
    onMutate: (variables: T) => {
      variables.id = key;
      createStore.setState({
        [key]: data,
      });
      return variables.id;
    },
    onSuccess: (result, variables, context) => {
      const state = createStore.getState();
      const updateState = state[key].map((item) =>
        item.id === context ? result : item
      );
      createStore.setState({
        [key]: updateState,
      });
    },
    onError: (error, variables, context) => {
      const state = createStore.getState();
      const deleteSkill = state[key].filter((item) => item.id !== context);
      createStore.setState({
        [key]: deleteSkill,
      });
    },
  };
};