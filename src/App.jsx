import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}

      <div>
        <h1
          className='H1'>
          Count IS {count}
        </h1>

        <button
          type='button'
          className='counter'
          onClick={() => setCount(count + 1)}>
          ADD
        </button>

        <button
          type='button'
          className='counter'
          onClick={() => setCount(count - 1)}>
          SUB
        </button>

      </div>

    </>
  )
}

export default App
