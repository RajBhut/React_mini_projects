import React, { Children } from "react";
import { Link } from "react-router-dom";
import gamecontext from "./Gamecontext";
import { useState } from "react";
function GameProvide({ children }) {
    const [code , setcode] = useState(null)
  return (
    <>
    <gamecontext.Provider value={{code , setcode}}>
{children}
</gamecontext.Provider>
    
    
    </>
  );
}
export default GameProvide;