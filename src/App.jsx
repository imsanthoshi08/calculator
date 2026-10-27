import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./App.css";

const keys = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];

export default function App() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (k) => {
    if (k === "=") {
      try {
        setResult(String(Function("return " + expr)()));
      } catch {
        setResult("Error");
      }
    } else {
      setExpr(expr + k);
    }
  };

  const clear = () => {
    setExpr("");
    setResult("");
  };

  return (
    <div className="calc">
      <Display expr={expr} result={result} />
      <div className="keys">
        {keys.map((k) => (
          <Button key={k} label={k} onClick={handleClick} />
        ))}
        <button className="clear" onClick={clear}>C</button>
      </div>
    </div>
  );
}