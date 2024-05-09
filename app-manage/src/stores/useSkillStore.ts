import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IStoreSkill } from "../service/api/useSkillAPI";


const initialState: IStoreSkill = {
  skill: [],
};
export const createStore = create<IStoreSkill>()(
  devtools(() => ({
    ...initialState,
  }))
);