import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10)

  // let counter = 20

  const addvalue = () => {
    setCounter(prev => Math.min(10, prev + 1)) 

    // counter=counter+1
    // console.log("Clicked",counter);
  }

   const removevalue = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1)
    }
  }

  return (
    <>
    <h1>Hey-Buddy !!</h1>
    <h2>Counter Value :{counter}</h2>

    <button
     onClick={addvalue}
     >Add value{counter}</button>
    <br/>
    <button
    onClick={removevalue}
    >Remove value{counter}</button>
    <p>Footer:{counter}</p>
    </>
    
  )
}

export default App
