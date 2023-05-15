import "./App.css";
import { RecoilRoot } from "recoil";
// import FontButton from "./RecoilExample/FontButton";
// import Text from "./RecoilExample/Text";
// import CharacterCounter from "./RecoilExample/CharacterCounter";
import TodoList from "./RecoilExample/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/* <FontButton /> */}
        {/* <Text /> */}
        {/* <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
