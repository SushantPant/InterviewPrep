import { useState } from "react";
import "./App.css";
import TodolistCode from "./components/TodolistCode";
import Counter from "./components/Counter";
import News from "./components/News";
import Khalti from "./components/Khalti";
import Hook from "./components/Hook";
import QrCode from "./components/QrCode";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Hook></Hook>
      <TodolistCode></TodolistCode>
      <Counter></Counter>
      <Khalti></Khalti>
      <News></News>
    </>
  );
}

export default App;
