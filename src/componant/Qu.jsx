import React, { useContext } from 'react'
import gamecontext from './Gamecontext';
import { useState } from 'react';
export default function Qu() {
    const {setcode} = useContext(gamecontext);
    const [tx , settx] = useState('');

  return (<>
    <input type="text" value={tx} onChange={ (e)=>{settx(e.target.value)}} placeholder='createcode' />
    <button onClick={()=>{ setcode(tx)}}>add</button>
  </>
  )
}
