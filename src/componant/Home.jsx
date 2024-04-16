import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="bg-slate-200 h-screen w-full flex">
       
       <button className='bg-blue-500 rounded-lg shadow-lg p-1 m -2 h-7 m-2'> <Link to={"/form"}> Form</Link> </button>
       <button className='bg-blue-500 rounded-lg shadow-lg p-1 m -2 h-7 m-2'> <Link to={"/bg"}> Background changer</Link> </button>
       <button className='bg-blue-500 rounded-lg shadow-lg p-1 m -2 h-7 m-2'> <Link to={"/pg"}> password genarator</Link> </button>
    </div>
  )
}
