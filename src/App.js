import React from "react";
import { useState } from "react";

function App() {
  
  const [value, setValue] = useState(0)

  function increment(){
    setValue(value+1)
  }

  function decrement(){
    if()
    setValue(value-1)
  }

  function reset(){
    setValue(0)
  }


  return (
    <div>
      <h1>Counter app</h1>
      {value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
