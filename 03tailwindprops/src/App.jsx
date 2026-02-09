// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

 
function App() {

  //  const [count, setCount] = useState(0)
  //   let myObj={
  //       username:"sourav",
  //       age:22,
  //   }
  //   let myArr=[1,2,3,]

  return (
    <>
    <h1 className="bg-green-500 text-black text-3xl rounded-xl ">
   Hey Buddy Tailwind is WORKING.. 🔥
</h1>

<Card username="Sourav" btnText="Click Me"/>
<Card username="Kumar" btnText="Visit Me"/>
    </>
   
  )
}

export default App
