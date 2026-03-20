import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("blue")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
        bg-white px-3 py-2 rounded-xl'>
          
          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "red", color: "white"}}
          onClick={() => setcolor("red")}
          >Red</button>

          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "crimson", color: "white"}}
          onClick={() => setcolor("crimson")}
          >Crimson</button>

          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "yellow", color: "black"}}
          onClick={() => setcolor("yellow")}
          >Yellow</button>

          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "orange", color: "white"}}
          onClick={() => setcolor("orange")}
          >Orange</button>

          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "green", color: "white"}}
          onClick={() => setcolor("green")}
          >Green</button>

          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "blue", color: "white"}}
          onClick={() => setcolor("blue")}
          >Blue</button>

          <button className='outline-none px-5 py-2 shadow-lg rounded-xl'
          style={{backgroundColor: "grey", color: "white"}}
          onClick={() => setcolor("grey")}
          >Grey</button>

        </div>
      </div>
    </div>

  )
}

export default App
