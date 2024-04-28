import React from 'react'
import UseTheam from './Theamcontext'
function Button_theam() {

  const {Dark , Light , Theammode} = UseTheam("light");
  const buttonpresed = () =>{
    if(Theammode === "light")
    {
      Dark()
    }
    else{
      Light()
    }
  }

  return (
   <>

    
    <h1 className="text-2xl text-black dark:text-white">{Theammode}</h1>
    <div className="flex justify-center items-center">
    <label className="switch">
    <input type="checkbox" onClick={buttonpresed}/>
    <span className="slider round"></span>
    </label>
    </div>
  
   
   </>
  )
}
export default Button_theam;