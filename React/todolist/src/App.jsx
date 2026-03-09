import { useState } from 'react'
import Todolist from './todolist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Todolist />
  )
}

export default App
