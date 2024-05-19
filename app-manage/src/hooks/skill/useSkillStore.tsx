import { StateCreator } from "zustand";
import { KEY_SKILL, stores } from "../../stores/stores";
import { useShallow } from "zustand/react/shallow";
import { ISkill } from "./useSkillAPI";

export interface SkillSlice {
  [KEY_SKILL]: ISkill[];
  addFish: () => void;
}

const initialState = [
  {
    id: "ádsadsd",
    name: "string",
    description: "string",
    category: "string",
    created_at: "string",
    updated_at: "string",
  },
  {
    id: "ádsadsd",
    name: "string",
    description: "string",
    category: "string",
    created_at: "string",
    updated_at: "string",
  },
];


export const createSkillSlice: StateCreator<SkillSlice> = (set) => ({
  [KEY_SKILL]: initialState,
  addFish: () => set((state) => ({ [KEY_SKILL]: state[KEY_SKILL] })),
});

export default {
  Item: (item: number) => stores(useShallow((state) => state[KEY_SKILL][item])),
};
