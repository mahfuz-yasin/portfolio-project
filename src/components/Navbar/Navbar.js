import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/services'}> Services </Link>
      <Link to={'/blog'}> Blog </Link>
      <Link to={'/about'}> About Us </Link>
      <Link to={'/contact'}> Contact Us</Link>
    </div>
  )
}

export default Navbar