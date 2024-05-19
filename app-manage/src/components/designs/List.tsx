import Item from "./Item";
import _ from "lodash";

const List = () => {
  const handleItem = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const item = (event.target as HTMLElement).closest(".item");
    if (item) {
      console.dir("li |hello");
    }
  };

  return (
    <ul className="scroll" onClick={handleItem}>
      {_.times(10, (item) => {
        return <Item key={item} listItem={item} />;
      }).reverse()}
    </ul>
  );
};

export default List;
