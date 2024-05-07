import "./App.css";
import Button from "./components/controls/Button";
import Input from "./components/controls/Input";
import Caption from "./components/designs/Caption";
import List from "./components/designs/List";
import { Skill } from "./features/Skill";

function App() {
  const apt = Skill.useAPIs();
  console.log("apt", apt)

  return (
    <main className="container">
      <div className="columns">
        <div className="column">
          <Caption value="Controls" />
          <Button onClick={Skill.handleAdd} />
          <Input onChange={Skill.handleInput} />
        </div>
        <div className="column">
          <Caption value="Designs" />
          <List />
        </div>
      </div>
    </main>
  );
}

export default App;
