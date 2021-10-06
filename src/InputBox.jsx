
import './App.css';

function InputBox({ counter, handler }) {
  return (
    <div className="InputBox">
      <input type="text" value={counter} onChange={(e) => handler(e)}/>
    </div>
  );
}

export default InputBox;
