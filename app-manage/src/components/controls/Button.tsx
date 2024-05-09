import { Skill } from "../../features/Skill";
import { Rectangle } from "../common";

interface Prop {
  onClick: any;
}
const Button = ({ onClick }: Prop) => {
  const { mutate } = Skill.insertOne();
  return (
    <Rectangle
      onClick={() => onClick(mutate)}
      transform={{ w: 120, h: 36, align: "center", valign: "middle" }}
      appearance={{ fill: ["orange", "20"], radii: 8 }}
    >
      Add Skill
    </Rectangle>
  );
};

export default Button;
