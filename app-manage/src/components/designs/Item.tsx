import { memo } from "react";
import { createStore } from "../../stores/useSkillStore";
import { useShallow } from "zustand/react/shallow";

const Item = ({ item }: { item: number }) => {
  const list = createStore(useShallow((state) => state.skill[item]));
  
  if(!list) return ;
   return (
    <li key={list.id}>
      <h6>{list.name}</h6>
      <h6>{list.category}</h6>
      <h6>{list.description}</h6>
      <h6>{list.created_at}</h6>
      <hr />
    </li>
  );
};

export default memo(Item);