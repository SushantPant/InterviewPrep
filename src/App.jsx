import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodolistCode from './components/TodolistCode'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodolistCode></TodolistCode>
     <Counter></Counter>
    </>
  )
}

export default App
