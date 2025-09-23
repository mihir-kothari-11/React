import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 class="bg-red-500 md:bg-green-500 lg:bg-blue-500 p-4 m-5">Tailwind Test</h2>
     <Card  userName="Mihir Kothari" btnText = "Already Friend"/>
     <Card userName="Dev Gandha"/>
    </>
  )
}

export default App
