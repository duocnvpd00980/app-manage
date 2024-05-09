import "./App.css";
import Button from "./components/controls/Button";
import Input from "./components/controls/Input";
import Caption from "./components/designs/Caption";
import Container from "./components/designs/Container";
import List from "./components/designs/List";
import Wrapper from "./components/designs/Wrapper";
import { Skill } from "./features/Skill";

function App() {
  return (
    <Wrapper>
      <main className="container">
        <div className="columns">
          <Container as="control-left">
            <Caption value="Controls" />
            <Button onClick={Skill.handleAdd} />
            <Input onChange={Skill.handleInput} />
          </Container>
          <div className="column">
            <Caption value="Designs" />
            <List />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default App;
