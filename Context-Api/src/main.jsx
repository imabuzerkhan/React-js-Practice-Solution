import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { counterProvider } from './Component/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <counterProvider>
    <App />
    </counterProvider>
  </React.StrictMode>,
)
