import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.js'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App