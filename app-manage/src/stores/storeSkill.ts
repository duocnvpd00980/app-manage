import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ISkill } from "../hooks/skill/useSkillAPI";
import { ISkillDetails } from "../hooks/skill_details/useSkillDetailAPI";

export const SKILL_KEY = "skill";
export const SKILL_DETAILS_KEY = "skill_details";

interface IStoreSkill {
  [SKILL_KEY]: ISkill[];
  [SKILL_DETAILS_KEY]: ISkillDetails[];
}

const initialState: IStoreSkill = {
  [SKILL_KEY]: [],
  [SKILL_DETAILS_KEY]: [],
};

export const storeSkill = create<IStoreSkill>()(
  devtools(() => ({
    ...initialState,
  }))
);
