import { UseMutateFunction } from "@tanstack/react-query";
import useSkillAPI, { ISkill } from "./useSkillAPI";
import { message } from "../../utils/message";
import { storeSave } from "../../stores/storeSave";
import { KEY_SKILL } from "../../stores/stores";
import useSkillStore from "./useSkillStore";

let input = "";

export const useSkill = () => ({
  Listen: (select: any) => {
    useSkillAPI.Listen(select, (diff) => storeSave<ISkill>(KEY_SKILL, diff));
  },

  insertOne: useSkillAPI.InsertOne,
  
  item: useSkillStore.Item,

  handleAdd: (mutate: UseMutateFunction<ISkill, Error, ISkill, unknown>) => {
    if (input === "") return message.success("Tao quánh zô mặt");

    mutate({
      name: input,
      description:
        "The Football Is Good For Training And Recreational Purposes",
      category: "Christy Jerde",
    });
  },

  handleInput: (value: string) => {
    input = value;
  },
});
