import React from 'react';
import { Link } from 'react-router-dom';

import Button_theam from './Button_theam';

function Dashboard() {
    return (
       <div className="h-96 w-96 rounded-md bg-slate-300 shadow-xl backdrop-blur-0 flex justify-center items-center dark:bg-slate-500 ">
       
        <Button_theam/>
       </div>
    );
}

export default Dashboard;