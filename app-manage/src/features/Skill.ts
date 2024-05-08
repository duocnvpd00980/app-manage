import {
  UseMutateFunction,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { message } from "../service/message";
import { store, unsubStore } from "../stores";
import { createStore } from "../stores/useStore";
import {
  ISkill,
  apis,
  useSkillAPI,
  useSkillAPImutate,
} from "../service/api/fetchSkill";

let input = "";

export const Skill = {
  useAPIs: () => {
    const res = (data: any) => {
      store("skill", (get, set) => {
        set(data);
      });
    };
    const status = useSkillAPI(res);
    const mutate = useSkillAPImutate(res);

    const list = () => createStore((state) => state.skill);

    return { status, mutate, list };
  },

  handleInput: (value: string) => {
    input = value;
  },

  handleAdd: (mutate: UseMutateFunction<ISkill, Error, ISkill, unknown>) => {
   
    console.log(apis)
    // store("skill", (get, set) => {
    //   if (input === "") {
    //     message.success("cut chot tao");
    //     return;
    //   }
    //   mutate({
    //     name: input,
    //     description:
    //       "The Football Is Good For Training And Recreational Purposes",
    //     category: "Christy Jerde",
    //   });
    //   message.success("Thêm thanh công");
    //   return;
    // });
  },
};
