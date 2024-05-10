import { UseMutateFunction } from "@tanstack/react-query";
import useSkillAPI, { ISkill } from "./useSkillAPI";
import { store } from "../../stores";
import { message } from "../../utils/message";

let input = "";

export const useSkill = () => ({
  Listen: (select: any) => {
    useSkillAPI.Listen(select, (data) => {
      store("skill", (get, set) => {
        set(data);
      });
    });
  },

  insertOne: useSkillAPI.InsertOne,

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
