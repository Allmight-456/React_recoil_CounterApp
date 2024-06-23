import React from "react";
import './App.css'; // Importing the CSS file
import './index.css'
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {

  return (
    <div className="app-container">
      <div className="top-bar">Counter App</div>
        <RecoilRoot>
          <Count  />
          <div className="bottom-bar"> <EvenOddCountRenderer /></div>
        </RecoilRoot>
      
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

function EvenOddCountRenderer(){
  const count =useRecoilValue(countAtom);
  return <div>
    {(count % 2 == 0) ? "Even" : "Odd"}
  </div>
}

//  ? means then , : means else 
/*
function EvenOddCountRenderer(){
  const count = useRecoilValue(countAtom);
  if(count % 2 == 0){
    return <div>Even</div>
  }
  return <div>
    Odd
  </div>
}
*/

function Buttons() {
  //const [count,setCount ]= useRecoilState(countAtom);    -this needs to keep track of count 
  const setCount = useSetRecoilState(countAtom);
  console.log("re-rendered buttons")

  //setCount(count + 1)              -not a functions , buttons rerender on click
  //setCount(count => count + 1)     - an arrow function
  //setCount(function(count){ return count +1})
  

  return (
    <div className="buttons-container">
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
