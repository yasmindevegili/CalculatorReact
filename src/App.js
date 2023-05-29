import "./App.css";
import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
        <h1>Welcome to Calculator!</h1>
        <Calculator />
      </div>
  );
}

export default App;
