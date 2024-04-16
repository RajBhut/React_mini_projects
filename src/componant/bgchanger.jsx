import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Bgchanger() {

const [color , setColor] = useState("olive")


  return (
    <div className=' w-full h-screen duration-500 ' style={{backgroundColor : color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-md p-2"> 

<button className='outline-none px-4 rounded-full shadow-md text-white' onClick={()=>setColor("red")} style={{backgroundColor : "Red"}}>Red</button>
<button className='outline-none px-4 rounded-full shadow-md text-white' onClick={()=>setColor("blue")} style={{backgroundColor : "blue"}}>Blue</button>
<button className='outline-none px-4 rounded-full shadow-md' onClick={()=>setColor("yellow")} style={{backgroundColor : "yellow"}}>Yellow</button>
<button className='outline-none px-4 rounded-full shadow-md' onClick={()=>setColor("pink")} style={{backgroundColor : "pink"}}>Pink</button>
</div>

</div>
<button className='bg-blue-500 rounded-lg shadow-lg p-2 m -2'> <Link to={"/"}> Home</Link> </button>

    </div>
  )
}
