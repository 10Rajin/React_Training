import "./App.css";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [char, setChar] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const input = (event) => {
    const value = event.target.value;
    setChar(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    try {
      setLoading(true);
      setError("");
      setQuotes([]);
      const response = await fetch(
        `https://yurippe.vercel.app/api/quotes?character=${char}&random=1`
      );
      const result = await response.json();
      console.log(response);
      if (response.status === 404) {
        throw new Error("Character not found");
      }
      setQuotes(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>{char}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={char} onChange={input} />
        <button type="submit">Submit Form</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {quotes.map((item, index) => (
          <li key={index}>
            <strong>{item.show}</strong>: {item.quote}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
