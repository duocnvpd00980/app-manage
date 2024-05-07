import { create } from "zustand";
import { Skills } from "./useStoreList";
import { devtools, persist } from "zustand/middleware";

const initialState: Skills = {
  skills: [
    {
      id: 0,
      title: "Tai chinh",
    },
    {
      id: 0,
      title: "Y hoc",
    },
  ],
  input: "",
};

export const useStore = create<Skills>()(
  devtools(() => ({
    ...initialState,
  }))
);
