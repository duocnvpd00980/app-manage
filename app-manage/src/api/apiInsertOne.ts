import { ICollection, IDocument, store } from "../stores";

export const apiInsertOne = (key: ICollection, fn: any) => ({
  mutationFn: fn,
  onSuccess: (result: IDocument) => {
    store(key, (get, set) => {
      set(result);
    });
  },
});
