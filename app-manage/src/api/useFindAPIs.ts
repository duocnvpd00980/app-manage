import { createStore } from "../stores/useSkillStore";

export const useFindAPIs = (key: string, fn: T) => {
  const callback = (data: T) => {
    createStore.setState({
      [key]: data,
    });
  };
  return {
    queryKey: [fn],
    queryFn: fn(callback),
  };
};
