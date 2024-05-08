import { IState } from "../../service/api/fetchSkill";

interface Prop {
  use: IState;
}
const List = ({ use }: Prop) => {
  const { status, list } = use;
  if(status.isError) return "error";
  if(status.isLoading) return "loading...";
  return (
    <ul className="scroll">
      {list().map((skill, i) => (
        <li key={i}>
          <h6>{skill.name}</h6>
          <h6>{skill.category}</h6>
          <h6>{skill.description}</h6>
          <h6>{skill.created_at}</h6>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default List;
