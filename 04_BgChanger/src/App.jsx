import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white  ">
        <div className="flex space-x-4 p-4">
          <button onClick={() => setColor("red")} className="bg-red-500 w-16 h-16 rounded" style={{backgroundColor:"red"}}></button>
          <button onClick={() => setColor("blue")} className="bg-blue-500 w-16 h-16 rounded" style={{backgroundColor:"blue"}}></button>
          <button onClick={() => setColor("green")} className="bg-green-500 w-16 h-16 rounded" style={{backgroundColor:"green"}}></button>
          <button onClick={() => setColor("orange")} className="bg-yellow-500 w-16 h-16 rounded" style={{backgroundColor:"orange"}}></button>
          <button onClick={() => setColor("purple")} className="bg-purple-500 w-16 h-16 rounded" style={{backgroundColor:"purple"}}></button>
          <button onClick={() => setColor("black")} className="bg-black-500 w-16 h-16 rounded" style={{backgroundColor:"black"}}></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
