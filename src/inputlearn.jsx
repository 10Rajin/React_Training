import React from 'react'

const inputlearn = () => {
 const [input, setInput] = useState("Hello");

  const type = (event) => {
    let value = event.target.value;
    setInput(value);
  };
  
  const reset = event =>{
    setInput("It has been reseted");
  }
  return (
    <>
      <h1>{input}</h1>
      <input type="text" onChange={type} />
      <button onClick={reset}>Reset</button>  
    </>
  );
}

export default App;
