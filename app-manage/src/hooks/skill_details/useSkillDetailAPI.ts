import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { APIClient } from "../../api";
import { apiInsertOne } from "../../api/apiInsertOne";
import { SKILL_DETAILS_KEY } from "../../stores/storeSkill";
import { apiListen } from "../../api/apiListen";

export interface ISkillDetails {
  id?: string;
  skill_id: string;
  description: string;
  level: number;
  resources: string;
}

export interface IState {
  status: UseQueryResult<ISkillDetails, Error>;
  mutate: UseMutationResult<ISkillDetails, Error, ISkillDetails, unknown>;
  list: any;
}

const skill = new APIClient<ISkillDetails>(SKILL_DETAILS_KEY);

export default {
  Listen: (callback: (res: ISkillDetails) => void) =>
    useQuery(apiListen(SKILL_DETAILS_KEY, skill.listen(callback), ["data"])),
  InsertOne: () =>
    useMutation(apiInsertOne(SKILL_DETAILS_KEY, skill.insertOne)),
};
