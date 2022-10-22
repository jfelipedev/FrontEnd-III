import React from 'react'
import { GlobalStyle } from "./style/Global"
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
