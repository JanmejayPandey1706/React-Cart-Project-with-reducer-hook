import React from 'react'
import Header from './components/Header'
import './App.css'
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/cart' exact>
          <Cart/>
        </Route>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App