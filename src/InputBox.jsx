
import './App.css';

function InputBox({ counter }) {
  return (
    <div className="InputBox">
      <input type="text" value={counter}/>
    </div>
  );
}

export default InputBox;
