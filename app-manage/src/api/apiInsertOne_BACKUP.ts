import { storeSkill } from "../stores/storeSkill";


export const apiInsertOne_old = (key: string, fn: T) => {
  const dataStore = storeSkill.getState();
  return {
    mutationFn: fn,
    onMutate: (variables: T) => {
      variables.id = key;
      storeSkill.setState({
        [key]: variables,
      });
      return variables.id;
    },
    onSuccess: (result: T, variables: T, context: T) => {
      const updateState = dataStore[key].map((item: T) =>
        item.id === context ? result : item
      );
      storeSkill.setState({
        [key]: updateState,
      });
    },
    onError: (error: T, variables: T, context: T) => {
      const deleteSkill = dataStore[key].filter(
        (item: T) => item.id !== context
      );
      storeSkill.setState({
        [key]: deleteSkill,
      });
    },
  };
};
