import { UseMutateFunction } from "@tanstack/react-query";
import { message } from "../service/message";
import useSkillAPI, { ISkill } from "../api/useSkillAPI";

let input = "";

export const Skill = {
  find: () => useSkillAPI.Find,
  insertOne: () => useSkillAPI.InsertOne,

  handleInput: (value: string) => {
    input = value;
  },

  handleAdd: (mutate: UseMutateFunction<ISkill, Error, ISkill, unknown>) => {
    mutate({
      name: input,
      description:
        "The Football Is Good For Training And Recreational Purposes",
      category: "Christy Jerde",
    });
    message.success("cut chot tao");
  },
};
