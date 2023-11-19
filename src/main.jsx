import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<React.StrictMode> component enables strict mode for the entire subtree of components under it;helps catch common issues and potential bugs during development; identifying deprecated or unsafe practices in the code.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)