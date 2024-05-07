import { useStoreList } from "../../stores/useStoreList";

const List = () => {
  const skills = useStoreList();
  console.log("--ren-der--")
  const listFor = () =>
    skills?.map((item, i) => (
      <li key={i}>
        <h4>{item.title}</h4>
      </li>
    ));
  return <ul className="scroll">{listFor()}</ul>;
};

export default List;
