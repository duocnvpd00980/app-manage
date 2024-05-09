import Item from "./Item";
import _ from "lodash";

const List = () => (
  <ul className="scroll">
    {_.times(100, (item) => {
      return <Item key={item} item={item} />;
    }).reverse()}
  </ul>
);

export default List;
