import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  
  const addValue = () => {
    if(counter < 20)
    {
      // In this only 1 value is added
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)

      // This is add 4 + 1 from upper value 
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )

    }
    else
    {
      alert("You have reach the max limit")
    }
  }

  const removeValue = () => {
    if(counter > 0)
    {
      setCounter(counter - 1)
    }
    else{
      alert("You have reach the min value")
    }
  }

  const defaultValue = () => {
    setCounter(counter = 0)    
  }

  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add value</button><br /><br />
      <button onClick={removeValue}>Remove value</button><br /><br />
      <button onClick={defaultValue}>Default Value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
