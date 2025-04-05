import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length,setLength]=useState(10);
  const [numberAllowed,setNumberAllowed]=useState(true);
  const [symbolAllowed,setSymbolAllowed]=useState(true);
  const [password,setPassword]=useState("");

  const passwordRef=useRef(null)

  let pass=""
  
  
  const passwordGenerator=useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(symbolAllowed) str+="!@#$&*()_{}?";
    for(let i=0;i<length;i++)
    {
      pass+=str.charAt(Math.floor(Math.random()*str.length));
    }
    setPassword(pass);
  },[length,numberAllowed,symbolAllowed,setPassword]);

  useEffect(()=>
  {
    passwordGenerator()
  },[length,numberAllowed,symbolAllowed,passwordGenerator])
  const copyToClipboard=useCallback(()=>
  {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])
    

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-500">    
      <div className='block  items-center justify-center text-white my-10 p-2 bg-gray-500 gap-4'> 
        <h1 className='text-xl mb-2'>
          Password Generator
        </h1>
        <div className=" m-full max-w-md">
          <input className='bg-blue-950 mr-4 py-1 px-3 w-74 ' 
            value={password} 
            type="text" 
            placeholder="password" 
            readOnly
            ref={passwordRef} >

          </input>

          <button 
            className="bg-green-400 text-white px-3 py-1" 
            onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className='items-center justify-center mt-2'>

          <input className='mr-2 mt-2 align-baseline cursor-pointer'
            type="range" min={7} max={25} value={length}
            onChange={(e)=>{setLength(e.target.value)}}>
          </input>

          <label className='mr-2'>
            length {length}
          </label>
          <input type="checkbox" defaultChecked={numberAllowed}
          id="numberInput" onChange={()=>{
                setNumberAllowed((prev) => !prev); 
            }}>
          </input>
          <label className="mr-2">
            Characters
          </label>
          <input type="checkbox" defaultChecked={symbolAllowed}
          id="numberInput" onChange={()=>{
                setSymbolAllowed((prev) => !prev); 
            }}>
          </input>
          <label>
            Symbols
          </label>
          
        </div>
      </div>
      


     </div>
    </>
  )
}

export default App
