import React, { useContext, useState } from "react";
import { CountContext } from "../context";
import './App.css'; // Importing the CSS file
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="top-bar">Counter App</div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
      <div className="bottom-bar"> Count</div>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div className="counter">{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div className="buttons-container">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
