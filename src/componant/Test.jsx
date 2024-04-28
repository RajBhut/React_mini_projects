import React, { useState } from 'react'
import GameProvide from './Gamecontexprovidor'
import Loby from './Loby'
import Qu from './Qu'
import { TheamProvider } from './Theamcontext'
import { useEffect } from 'react'
import Dashboard from './Dashbord'
 function Test() {
const [Theammode, setTheammode] = useState('light');

  const Light  = () =>{
setTheammode("light")
  }
  const Dark = () =>{
    setTheammode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(Theammode)
  
   
  }, [Theammode])
  
  return (
    <GameProvide>
    <TheamProvider value={{Dark , Light , Theammode}}>
    
      <Dashboard/>
   <Qu/>
   <Loby/>
   


    
    </TheamProvider>
    </GameProvide>

  )
}
export default Test;