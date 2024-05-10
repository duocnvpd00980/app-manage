import { UseMutateFunction } from "@tanstack/react-query";
import { store } from "../../stores";
import { message } from "../../utils/message";
import useSkillDetailAPI, { ISkillDetails } from "./useSkillDetailAPI";

let input = "";

export const useSkillDetail = () => ({
  Listen: () => {
    useSkillDetailAPI.Listen((data) => {
      store("skill_details", (get, set) => {
        console.log(data)
        // set(data);
      });
    });
  },

  insertOne: useSkillDetailAPI.InsertOne,

  handleAdd: (
    mutate: UseMutateFunction<ISkillDetails, Error, ISkillDetails, unknown>
  ) => {
    if (input === "") return message.success("Tao quánh zô mặt");
    mutate({
      skill_id: "string",
      description: "string",
      level: 1,
      resources: "string",
    });
  },

  handleInput: (value: string) => {
    input = value;
  },
});
