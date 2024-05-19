import { storeSave } from "../stores/storeSave";

export const apiInsertOne = (key: any, fn: any) => ({
  mutationFn: fn,
  onSuccess: (result: any) => {
    storeSave(key, { result });
  },
});
