import { message } from "../service/message";
import { store } from "../stores/store";

let input = "1";
export const SKILL = {
  handleInput: (value: string) => {
    input = value;
    console.log("render", input);
  },
  handleAdd: () => {
    store("skills", (get, set) => {
      if (input === "") {
        message.success("cut chot tao");
        return;
      }
      set({
        id: 0,
        title: input,
      });
    });
  },
};
