import { useState } from 'react'
import TodolistCode from './components/TodolistCode'
import Counter from './components/Counter'
import News from './components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodolistCode></TodolistCode>
     <Counter></Counter>
     <News></News>
    </>
  )
}

export default App
