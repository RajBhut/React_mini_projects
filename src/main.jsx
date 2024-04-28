import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Router from './componant/router.jsx'
import Test from './componant/Test.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
   <Test />
  </React.StrictMode>,
)
