import { useState } from "react";
import "./App.css";

function App() {
  // let counter=0;
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };
const removeValue=()=>{
  setCount(count-1)
}
  return (
    <>
      <h1>React course on udemy</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {count}</p>
    </>
  );
}

export default App;
