import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./assets/Counter";

function App() {
  const [quotes, setQuotes] = useState([]);
  // const charName = "naruto";
  const { char, setChar } = useState([]);
  const input = () => {
    const value = event.target.value;
    setChar(value);
    console.log(value);
  };
  
  const handleSubmit = async event => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://yurippe.vercel.app/api/quotes?character=${char}&random=2`
        );
        const result = await response.json();
        setQuotes(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuote();
  }, [];
  console.log(quotes);
  return (
    <>
      <h1>{input}</h1>
      <input onChange={input} type="text"></input>
      <li>
        {quotes.map((todoItem) => (
          <>
            <li>{todoItem.show}</li>
            <li>{todoItem.quote}</li>
          </>
        ))}
      </li>
    </>
  );
}
export default App;
