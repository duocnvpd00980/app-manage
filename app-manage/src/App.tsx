import "./App.css";
import Button from "./components/controls/Button";
import Input from "./components/controls/Input";
import Caption from "./components/designs/Caption";
import Container from "./components/designs/Container";
import Content from "./components/designs/Content";
import List from "./components/designs/List";
import NavBar from "./components/designs/NavBar";
import Sidebar from "./components/designs/Sider";
import Wrapper from "./components/designs/Wrapper";
import { useSkill } from "./hooks/skill/useSkill";

function App() {
  const skill = useSkill();
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <Button onClick={skill.handleAdd} />
          <Button onClick={skill.handleAdd} />
          <Button onClick={skill.handleAdd} />
          <Button onClick={skill.handleAdd} />
          <Button onClick={skill.handleAdd} />
        </Sidebar>
        <Content>
          <NavBar>
            <Input onChange={skill.handleInput} />
            <Caption />
            <List />
          </NavBar>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default App;
