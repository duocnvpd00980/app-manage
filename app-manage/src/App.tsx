import "./App.css";
import Button from "./components/controls/Button";
import Input from "./components/controls/Input";
import Caption from "./components/designs/Caption";
import List from "./components/designs/List";
import { SKILL } from "./hooks/skill";

function App() {
  return (
    <main className="container">
      <div className="columns">
        <div className="column">
          <Caption value="Controls" />
          <Button onClick={SKILL.handleAdd} />
          <Input onChange={SKILL.handleInput} />
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
