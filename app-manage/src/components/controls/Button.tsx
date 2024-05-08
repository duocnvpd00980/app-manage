import { IState } from "../../service/api/fetchSkill";

interface Prop {
  onClick: any;
  use: IState;
}

const Button = ({ onClick, use }: Prop) => {
  const { mutate, isPending } = use.mutate;
  return (
    <button onClick={() => onClick(mutate)}>
      {isPending && "loading"} Add Skill
    </button>
  );
};

export default Button;
