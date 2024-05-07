import { MouseEventHandler } from "react";

interface Prop {
  onClick: MouseEventHandler | undefined;
}

const Button = ({ onClick }: Prop) => (
  <button onClick={onClick}>Add Skill</button>
);

export default Button;
