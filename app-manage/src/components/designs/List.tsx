
import { usePostAPIs } from "../../service/api/apiPosts";
import { useStoreList } from "../../stores/useStoreList";

const List = () => {
  const skills = useStoreList();
  const state = usePostAPIs();
  console.log(state.data);
  const listFor = () =>
    skills?.map((item, i) => (
      <li key={i}>
        <h4>{item.title}</h4>
      </li>
    ));
  return <ul className="scroll">{listFor()}</ul>;
};

export default List;
