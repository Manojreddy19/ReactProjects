import { useState } from "react"


function App() {
  const [color,setColor]=useState("blue");
  function changeColor(col)
  {
    setColor(col);

  }

  return (
    <>
    <div className="w-screen h-screen duration-300 " 
    style={{backgroundColor: color}}>
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-3 py-4 px-4 bg-amber-50 rounded-3xl" >
        <button className="px-1 py-4 rounded-full text-black" 
          onClick={()=>{setColor("red")}} 
          style={{backgroundColor:"red"}}>
          red
        </button>
        <button className="px-1 py-4 rounded-full text-black"   
          onClick={()=>{setColor("green")}} 
          style={{backgroundColor:"green"}}>
          green
        </button>
        <button className="px-1 py-4 rounded-full text-black"   onClick={()=>{setColor("grey")}} style={{backgroundColor:"grey"}}>
          grey
        </button>
        <button className="px-1 py-4 rounded-full text-black"   onClick={()=>{setColor("violet")}} style={{backgroundColor:"violet"}}>
          violet
        </button>
        <button className="px-1 py-4 rounded-full text-black"   onClick={()=>{setColor("pink")}} style={{backgroundColor:"pink"}}>
          pink
        </button>
        <button className="px-1 py-4 rounded-full text-black"   onClick={()=>{setColor("yellow")}} style={{backgroundColor:"yellow"}}>
          yellow
        </button>

      </div>

    </div>

    </>
  )
}

export default App
