
import './App.css';

function Button({ size, value, handler }) {
  let style = "";
  if(size === "small"){
      style = {
          width: "50px",
          height: "50px",
          padding: "20px",
          marginTop: "20px"
      }
  }
  else{
    style = {
        width: "100px",
        height: "60px",
        padding: "20px",
        marginTop: "20px"
    }
  }
  return (
    <div className="Button">
      <button className={style} onClick={() => handler()}>{value}</button>
    </div>
  );
}

export default Button;
