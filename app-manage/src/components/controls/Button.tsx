import { useSkill } from "../../hooks/skill/useSkill";
import { Rectangle } from "../common";
import { TypeVariant } from "../common/assets/TypeVariant";
interface Prop {
  onClick: any;
}

const variants: TypeVariant = {
  init: {
    transform: { x: 18, w: 280, h: 48, align: "left", valign: "middle" },
  },
  active: {
    transform: { w: 120, h: 36, align: "center", valign: "middle" },
    appearance: { radii: 8, stroke: [1, "#fff"] },
  },
};

const Button = ({ onClick }: Prop) => {
  const skill = useSkill();
  const { mutate } = skill.insertOne();
  return (
    <Rectangle
      onClick={() => onClick(mutate)}
      variant={variants["init"]}
    >
      Add Skill
    </Rectangle>
  );
};

export default Button;
