import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"; 
import App from './App.jsx'


const reactElement = React.createElement(
    'a',
    {href : 'https://flipkart.com', targer:'_blank'},
    'visit flipkart'
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   { reactElement}
   <App/>
  </StrictMode>,
)
