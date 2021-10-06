
import './App.css';
import InputBox from './InputBox';
import Button from './Button';
import { store } from "./Redux/store";
import {incrementCount, decrementCount} from "./Redux/actions";
import { useState } from 'react';
import Display from './Display';

function App() {
  const [forceUpdater, setForceUpdater] = useState(0);
  const counter = store.getState();
  const btnIncrement = {
    size: "big",
    value: "Increment"
  }
  const btnDecrement = {
    size: "big",
    value: "Decrement"
  }
  
  const handleIncrement = () => {
    store.dispatch(incrementCount(counter));
    forceStateUpdate();
  }
  const handleDecrement = () => {
    store.dispatch(decrementCount(counter));
    forceStateUpdate();
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

      </div>
    </div>
  );
}

export default App;
