import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../../React-Ecommerce/src/pages/Home/Home'
import Navbar from './component/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
