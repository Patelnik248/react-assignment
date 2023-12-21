import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount( count - 1)
  }

  const reset = () =>{
    setCount(0)
  }

  return (
    <div id="container">
      <h1>Counter App</h1>
      <p>Count: {count} </p>
      <div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>      
      </div>

    </div>
  )
}

export default App
