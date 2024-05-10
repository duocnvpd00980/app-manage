import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { APIClient } from "../../api";
import { apiInsertOne } from "../../api/apiInsertOne";
import { SKILL_KEY } from "../../stores/storeSkill";
import { apiListen } from "../../api/apiListen";

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

const skill = new APIClient<ISkill>(SKILL_KEY);

export default {
  Listen: (select: any, callback: (res: ISkill) => void) =>
    useQuery(apiListen(select, SKILL_KEY, skill.listen(callback))),
  InsertOne: () => useMutation(apiInsertOne(SKILL_KEY, skill.insertOne)),
};
