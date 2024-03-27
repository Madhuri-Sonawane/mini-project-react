import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RandPassGen from './components/RandPassGen.jsx'
import PassGenV1 from './components/PassGenV1.jsx'
import CurrencyConverter from './components/CurrencyConverter.jsx'
import InputBox from './components/CurrencyCompo/InputBox.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RandPassGen/> */}
    {/* <PassGenV1/> */}
    {/* <CurrencyConverter/> */}
    <CurrencyConverter/>
  </React.StrictMode>,
)
