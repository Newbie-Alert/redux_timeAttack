import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";
import CardList from "./components/CardList";
import List from "./components/List";

const MainContainer = styled.div`
  width: 1280px;
  height: 960px;
  border: 1px solid black;
  margin: 3rem auto;
`;

const MainTitle = styled.h2`
  width: fit-content;
  margin: auto;
`;

function App() {
  return (
    <MainContainer>
      <MainTitle>Todolist</MainTitle>
      <Input />
      <CardList>
        <List isActive={true} />
        <List isActive={false} />
      </CardList>
    </MainContainer>
  );
}

export default App;
