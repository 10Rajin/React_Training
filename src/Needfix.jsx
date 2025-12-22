import "./App.css";
// import { ChildrenComponent } from "./assets/ChildrenComponent";
// import ParentComponent from "./assets/ParentComponent";
// import Name from "./name";
import { useState } from "react";
import Counter from "./assets/Counter";

function App() {
  const [input, setInput] = useState('Hello');
  // return <>  // const [showCounter, setShowCounter] = useState(false);

  // // const toggle = () => {
  //   setShowCounter(!showCounter);
  // };

  // return (
  //   <>
  //     <button onClick={toggle}>Toggle</button>
  //     {showCounter ? "Hello" : "Bye"}
  return (
    <>
      <h1>{input}</h1>
    </>
  );
}

export default App;
