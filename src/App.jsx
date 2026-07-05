import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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
    <>
      <div>
        <h1 className='top-head'>{count}</h1>

        <button onClick={increment} className='counter'
          type='button'>
          ADD
        </button>
        <button onClick={decrement} className='counter'
        id='min-btn'
          type='button'>
          SUB
        </button>

        {count === 10 && <p>Max reached!</p>}
      {count === 0 && <p>Min reached!</p>}

      </div>
    </>
  )
}

export default App
