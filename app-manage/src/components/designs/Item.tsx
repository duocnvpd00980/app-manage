import React, { memo } from "react";
import { useSkill } from "../../hooks/skill/useSkill";

const Item = memo(({ listItem }: { listItem: number }) => {
  const { item } = useSkill();
  const items = item(listItem);

  if (!items) return null;

  return (
    <li key={items.id} className="item">
      <h6>{items.name}</h6>
      <h6>{items.category}</h6>
      <h6>{items.description}</h6>
      <h6>{items.created_at}</h6>
      <hr />
    </li>
  );
});

export default Item;
