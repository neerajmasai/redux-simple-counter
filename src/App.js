
import './App.css';
import InputBox from './InputBox';
import Button from './Button';
import { store } from "./Redux/store";
import { incrementCount, decrementCount, add, subtract, multiply, divide } from "./Redux/actions";
import { useState } from 'react';
import Display from './Display';

function App() {
  const [forceUpdater, setForceUpdater] = useState(0);
  const [data, setData] = useState(0);
  const counter = store.getState();
  const btnIncrement = {
    size: "big",
    value: "Increment"
  }
  const btnDecrement = {
    size: "big",
    value: "Decrement"
  }
  const btnAdd = {
    size: "small",
    value: "Add"
  }
  const btnSubtract = {
    size: "big",
    value: "Subtract"
  }
  const btnMultiply = {
    size: "small",
    value: "Multiply"
  }
  const btnDivide = {
    size: "big",
    value: "Divide"
  }  
  const handleIncrement = () => {
    store.dispatch(incrementCount(counter));
    forceStateUpdate();
  }
  const handleDecrement = () => {
    store.dispatch(decrementCount(counter));
    forceStateUpdate();
  }
  const handleAdd = () => {
    store.dispatch(add(data));
    forceStateUpdate();
  }
  const handleSubtract = () => {
    store.dispatch(subtract(data));
    forceStateUpdate();
  }
  const handleMultiply = () => {
    store.dispatch(multiply(data));
    forceStateUpdate();
  }
  const handleDivide = () => {
    store.dispatch(divide(data));
    forceStateUpdate();
  }  
  const handleChange = (e) => {
    setData(Number(e.target.value));
  }
  const forceStateUpdate = () => {
    console.log("FORCE UPDATING...")
    setForceUpdater(forceUpdater+1);
  }

  return (
    <div className="App">
      
      <div className="Top">
        <Display {...counter} />
        <div>
          <Button {...btnIncrement} handler={handleIncrement} />
          <Button {...btnDecrement} handler={handleDecrement} />
        </div>
      </div>
      <div className="Bottom">
        <InputBox handler={handleChange}/>
        <div>
          <Button {...btnAdd} handler={handleAdd} />
          <Button {...btnSubtract} handler={handleSubtract} />
          <Button {...btnMultiply} handler={handleMultiply} />
          <Button {...btnDivide} handler={handleDivide} />
        </div>
      </div>
    </div>
  );
}

export default App;
