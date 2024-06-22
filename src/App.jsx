import React from "react";
import './App.css'; // Importing the CSS file
import './index.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {

  return (
    <div className="app-container">
      <div className="top-bar">Counter App</div>
        <RecoilRoot>
          <Count  />
        </RecoilRoot>
      <div className="bottom-bar"> Count</div>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div className="counter">{count}</div>;
}

function Buttons() {
  const [count,setCount ]= useRecoilState(countAtom);
  return (
    <div className="buttons-container">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
