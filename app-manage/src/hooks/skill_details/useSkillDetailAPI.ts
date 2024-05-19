import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { APIClient } from "../../api/apis";
import { apiInsertOne } from "../../api/apiInsertOne";
import { KEY_SKILL_DETAILS } from "../../stores/stores";
import { apiListen } from "../../api/apiListen";

export interface ISkillDetails {
  id?: string;
  skill_id: string;
  description: string;
  level: number;
  resources: string;
}

const skill = new APIClient<ISkillDetails>(KEY_SKILL_DETAILS);

export default {
  Listen: (callback: (res: ISkillDetails) => void) =>
    useQuery(apiListen(KEY_SKILL_DETAILS, skill.listen(callback), ["data"])),
  InsertOne: () =>
    useMutation(apiInsertOne(KEY_SKILL_DETAILS, skill.insertOne)),
};
