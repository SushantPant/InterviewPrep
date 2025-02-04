import { useState } from "react";
import "./App.css";
import TodolistCode from "./components/TodolistCode";
import Counter from "./components/Counter";
import News from "./components/News";
import Khalti from "./components/Khalti";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <TodolistCode></TodolistCode>
      <Counter></Counter>
      <Khalti></Khalti>
      <News></News>
    </>
  );
}

export default App;
