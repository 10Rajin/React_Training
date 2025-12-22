import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodoList([...todoList, input]);
    setInput("");
  };
  const handleReset = () => {
    setTodoList([]);
    setInput("");
  };
  console.log("Todo List:", todoList);
  return (
    <>
      <h1>{input}</h1>
      <input
        value={input}
        placeholder="Input Values for to do list"
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReset}>RESET</button>
      <button>Useless Button</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
