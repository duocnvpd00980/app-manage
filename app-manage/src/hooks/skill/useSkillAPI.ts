import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { APIClient } from "../../api/apis";
import { apiInsertOne } from "../../api/apiInsertOne";
import { KEY_SKILL } from "../../stores/stores";
import { apiListen } from "../../api/apiListen";

export interface ISkill {
  id?: string;
  name: string;
  description: string;
  category: string;
  created_at?: string;
  updated_at?: string;
}

const skill = new APIClient<ISkill>(KEY_SKILL);

export default {
  Listen: (select: any, callback: (res: ISkill) => void) =>
    useQuery(apiListen(select, KEY_SKILL, skill.listen(callback))),
  InsertOne: () => useMutation(apiInsertOne(KEY_SKILL, skill.insertOne)),
};
