import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="bg-slate-200 h-screen w-full flex-wrap ">
       
       <button className=' text-cyan-50  bg-blue-500 rounded-lg shadow-lg p-3 mt-10 ml-5 h-16 '> <Link to={"/form"}> Form</Link> </button>
       <button className='text-cyan-50 bg-blue-500 rounded-lg shadow-lg p-3 mt-10 ml-5 h-16 '> <Link to={"/bg"}> Background changer</Link> </button>
       <button className='text-cyan-50 bg-blue-500 rounded-lg shadow-lg p-3 mt-10  ml-5 h-16 '> <Link to={"/pg"}> password genarator</Link> </button> 
       <button className='text-cyan-50 bg-blue-500 rounded-lg shadow-lg p-3 mt-10  ml-5 h-16 '> <Link to={"/cd"}> cardr</Link> </button> 

    </div>
  )
}
