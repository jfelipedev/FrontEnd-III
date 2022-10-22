import React from 'react'
import { GlobalStyle } from "./Style/GlobalStyle"
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Class01  from './components/Class01/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Class01 />
    <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
