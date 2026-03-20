import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const [disabled, setDisabled] = useState(false)

  // let counter = 15
  const addValue = () => {
    if(counter >= 20) {
      setDisabled(true)
    } else {
    setCounter(counter+1)
    }

    // counter = counter + 1
    // setCounter(counter+1)
    

}
  const removeValue = () => {
    if(counter <= 0) {
      setDisabled(true)
    } else { 
      setCounter(counter-1) 
}}

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

      <button onClick={addValue} disabled={disabled}
      >Add value</button>
      <br />
      <button onClick={removeValue} disabled={disabled}
      >remove value</button>
    </>
  )
}

export default AnotherApp

function  AnotherApp() {

  const[counter, setCounter] = useState(10)


  const addValue = () => {
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  
  setCounter(prevCounter => prevCounter+1)
  setCounter(prevCounter => prevCounter+1)
  setCounter(prevCounter => prevCounter+1)
  setCounter(prevCounter => prevCounter+1)

  // setCounter(prevCounter => prevCounter+5)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }


  return(
    <>
    <h1>
      counter value: {counter}
    </h1>
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={removeValue}>remove</button>
    </>
  )

}