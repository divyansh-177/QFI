import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sendm from './components/sendm/Sendm'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
        <Header />
        <Outlet />
        <Sendm />
        <Footer />
    </>
  )
}

export default App