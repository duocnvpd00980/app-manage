import { message } from "../../utils/message";
import useSkillDetailAPI, { ISkillDetails } from "./useSkillDetailAPI";
import { storeSave } from "../../stores/storeSave";
import { KEY_SKILL_DETAILS } from "../../stores/stores";
import useSkillDetailStore from "./useSkillDetailStore";

let input = "";

export const useSkillDetail = () => ({
  listen: () => {
    useSkillDetailAPI.Listen((data) => {
      storeSave<ISkillDetails>(KEY_SKILL_DETAILS, data);
    });
  },
  item: useSkillDetailStore.Item,
  insertOne: useSkillDetailAPI.InsertOne,
  handleAdd: (mutate: (req: ISkillDetails) => void) => {
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
