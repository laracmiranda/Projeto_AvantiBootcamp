import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Router/>
   </BrowserRouter>
  )
}

export default App
