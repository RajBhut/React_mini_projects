import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Bgchanger from "./bgchanger";
import Passwordgenrater from "./Passwordgenrater";
function Router ()
{
    return (
        <BrowserRouter>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/form" element={<Form/>}/>
<Route path="/bg" element={<Bgchanger/>}/>
<Route path="/pg" element={<Passwordgenrater/>}/>

     </Routes>
        </BrowserRouter>
    );
}
export default Router