import useSkillAPI from "../../service/api/useSkillAPI";

interface Prop {
  onClick: any;
}
const Button = ({ onClick }: Prop) => {
  const { mutate } = useSkillAPI.Write();
  return <button onClick={() => onClick(mutate)}>Add Skill</button>;
};

export default Button;
