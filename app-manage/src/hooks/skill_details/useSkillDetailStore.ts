import { useShallow } from "zustand/react/shallow";
import { stores } from "../../stores/stores";

export default {
  Item: (item: number)=> stores(useShallow((state) => state.skill[item])),
}