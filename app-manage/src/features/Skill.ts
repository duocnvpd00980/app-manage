import { useQuery } from "@tanstack/react-query";
import { message } from "../service/message";
import { store } from "../stores/store";
import fetchPosts from "../service/api/fetchPosts";

let input = "1";

export const Skill = {
  useAPIs: () => {
    const res = (data: any) => {
      store("skills", (get, set) => {
        console.log("thành công")
        set(data.data);
      });
    }
    const req = useQuery({
      queryKey: ["Posts"],
      queryFn: fetchPosts.find(res),
    });

    return req;
  },

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
