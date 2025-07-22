import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");

  console.log("hii");

  return (
    <div className="flex-grow w-full h-screen duration-200" style={{ backgroundColor: color }}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl">

      <button
      onClick={(e)=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor:"red"}}>RED</button>


       <button 
       onClick={(e)=>setColor("yellow")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor:"yellow"}}>Yellow</button>


       <button
       onClick={(e)=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor:"green"}}>GREEN</button>


       <button 
       onClick={(e)=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor:"blue"}}>BLUE</button>


       <button
       onClick={(e)=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor:"orange"}}>ORANGE</button>



    </div>
  </div>
</div>

  );
}

export default App;
