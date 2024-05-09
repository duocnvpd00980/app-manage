import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { APIClient } from ".";
import { useReadApis } from "./useReadApis";
import { useWriteApis } from "./useWriteApis";

export interface IStoreSkill {
  skill: ISkill[];
}
export interface ISkill {
  id?: string;
  name: string;
  description: string;
  category: string;
  created_at?: string;
  updated_at?: string;
}

export interface IState {
  status: UseQueryResult<ISkill, Error>;
  mutate: UseMutationResult<ISkill, Error, ISkill, unknown>;
  list: any;
}

const skill = new APIClient<ISkill>("skill");
const SKILL_KEY = "skill";

export default {
  Read: () => useQuery(useReadApis(SKILL_KEY, skill.find)),
  Write: () => useMutation(useWriteApis(SKILL_KEY, skill.insertOne)),
};
