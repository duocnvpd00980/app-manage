import { create } from "zustand";
import { Skills } from "./useStoreList";
import { devtools, persist } from "zustand/middleware";

const initialState: Skills = {
  skills: [],
  input: "",
};

export const useStore = create<Skills>()(
  devtools(() => ({
    ...initialState,
  }))
);
