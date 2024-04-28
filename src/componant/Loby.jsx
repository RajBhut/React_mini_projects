import React, { useContext } from 'react'

import gamecontext from './Gamecontext';
 function Loby() {
const {code} = useContext(gamecontext) 
if (!code)return <h1>no code</h1>
  return (
    <>
    
    <h1>{code}</h1>
    </>
  )
}
export default Loby;