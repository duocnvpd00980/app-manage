import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { APIClient } from ".";

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
  list: () => ISkill[];
}

const skill = new APIClient<ISkill>("skill");

export const useSkillAPI = (res) => useQuery({
  queryKey: ["skill"],
  queryFn: skill.find(res),
});

export const useSkillAPImutate = (res) => useMutation({
  mutationFn: skill.insertOne(res),
  onError: () => {
    console.log("Server: thất bại và đồng bộ được");
  },
});
const useHello = () => alert("Hello");
export const apis = (callback) => {
  return callback(
    ()=> {
      console.log("hello world api")
      return useHello
    }
  )
}