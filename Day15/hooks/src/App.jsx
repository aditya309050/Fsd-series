import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function resetCount() {
    setCount(0)
  }
   function decreasecount() {
    setCount(count - 1)
   }

  return (
    <div className='app'>
      <h1>hello,this is a counter app</h1>
      <p>Click this button to increase the value</p>

      <button onClick={increaseCount}>Increase</button>
      <p>Current count: {count}</p>
      <p>Click this to reset</p>
      <button onClick={resetCount}>Reset</button>
      
      <p>click this button to decrease the value </p>
      <button onClick={decreasecount}>Decrease</button>
    </div>
  )
}

export default App