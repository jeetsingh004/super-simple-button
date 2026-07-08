import { useState } from 'react'
import './App.css'
import NewBtn from './assets/newbtn'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <NewBtn>
      <div className='app-wrapper'>
        <h1 className='top-head'>{count}</h1>

        <button onClick={increment} className='counter' type='button'>
          ADD
        </button>
        <button onClick={decrement} className='counter' id='min-btn' type='button'>
          SUB
        </button>

        {count === 10 && <p>Max reached!</p>}
        {count === 0 && <p>Min reached!</p>}
      </div>
    </NewBtn>
  )
}

export default App
