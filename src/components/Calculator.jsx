import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const[num, setNum] = useState(0);
    const[oldNum, setOldNum] = useState(0);
    const[operator, setOperator] = useState();

    function inputNum(e){
        const input = e.target.value;
        if(num === 0){
          setNum(input);
        }else{
          setNum(num + input);
        }
    }

    function clear(e){
      setNum(0);
    }

    function porcentage(){
      setNum(num/100);
    }

    function changeSign(){
      if(num > 0){
        setNum(-num);
      }else{
        setNum(Math.abs(num));
      }
    }

    function operatorHandler(e){
      const operatorInput = e.target.value;
      setOperator(operatorInput);
      setOldNum(num); //seta o número atual na mémoria
      setNum(0); //zera a váriavel para armazenar outro número
    }

    function calculate(){
      switch (operator) {
        case "+":
          setNum(parseFloat(oldNum) + parseFloat(num));
          break;
        case "-":
          setNum(parseFloat(oldNum) - parseFloat(num));
          break;
        case "*":
          setNum(parseFloat(oldNum) * parseFloat(num));
          break;
        case "/":
          setNum(num === 0 ? "Invalid Count" : parseFloat(oldNum) / parseFloat(num));
          break;
        default:
          setNum("Invalid Input");
      }
    }

  return (
    <div>
      <Box m={6} />
      <Container maxWidth="xs">
        <div className="wrapper">
            <h1 className="result">{num}</h1>
          <button className="delete" onClick={clear}>AC</button>
          <button className="operation" onClick={changeSign}>+/-</button>
          <button className="operation" onClick={porcentage}>%</button>
          <button className="operation" onClick={operatorHandler} value={"/"}>/</button>

          <button className="button" onClick={inputNum} value={7}>7</button>
          <button className="button" onClick={inputNum} value={8}>8</button>
          <button className="button" onClick={inputNum} value={9}>9</button>
          <button className="operation" onClick={operatorHandler} value={"*"}>X</button>

          <button className="button" onClick={inputNum} value={4}>4</button>
          <button className="button" onClick={inputNum} value={5}>5</button>
          <button className="button" onClick={inputNum} value={6}>6</button>
          <button className="operation" onClick={operatorHandler} value={"-"}>-</button>

          <button className="button" onClick={inputNum} value={1}>1</button>
          <button className="button" onClick={inputNum} value={2}>2</button>
          <button className="button" onClick={inputNum} value={3}>3</button>
          <button className="operation" onClick={operatorHandler} value={"+"}>+</button>

          <button className="button" onClick={inputNum} value={0}>0</button>
          <button className="button" onClick={inputNum} value={"."}>.</button>
          <button className="equal" onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  );
}
