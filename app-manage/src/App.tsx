import "./App.css";
import Button from "./components/controls/Button";
import Input from "./components/controls/Input";
import Caption from "./components/designs/Caption";
import List from "./components/designs/List";
import { Skill } from "./features/Skill";
import { apis } from "./service/api/fetchSkill";

function App() {
  const skill = Skill.useAPIs();
  const call = apis(()=>{
    console.log("hello 2")
  })
  call()
  return (
    <main className="container">
      <div className="columns">
        <div className="column">
          <Caption value="Controls" />
          <Button onClick={Skill.handleAdd} use={skill} />
          <Input onChange={Skill.handleInput} />
        </div>
        <div className="column">
          <Caption value="Designs" />
          <List use={skill}/>
        </div>
      </div>
    </main>
  );
}

export default App;
