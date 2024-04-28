import { createContext, useContext } from "react";
export const TheamContex = createContext({Theammode: 'light' ,Dark: ()=>{}, Light : ()=>{} });
export const TheamProvider =  TheamContex.Provider;

export default function UseTheam()
{
    return useContext(TheamContex)
}