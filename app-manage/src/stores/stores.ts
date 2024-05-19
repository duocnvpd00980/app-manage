import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ISkill } from "../hooks/skill/useSkillAPI";
import { ISkillDetails } from "../hooks/skill_details/useSkillDetailAPI";
import { SkillSlice, createSkillSlice } from "../hooks/skill/useSkillStore";

export const KEY_SKILL = "skill";
export const KEY_SKILL_DETAILS = "skill_details";
export type KEY_STORE = "skill" | "skill_details";
export interface IStores {
  [KEY_SKILL]: ISkill[];
  [KEY_SKILL_DETAILS]: ISkillDetails[];
}

type BoundStore = SkillSlice;
export const stores = create<BoundStore>()(
  devtools((...creator) => ({
    ...createSkillSlice(...creator),
  }))
);
