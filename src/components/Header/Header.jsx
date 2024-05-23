import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <span><Link to="/home">Home</Link> </span>
        <span><Link to="/plates">Plates</Link> </span>
        <span><Link to="/suprise">Surprise</Link> </span>
      </nav>
    </div>
  )
}

export default Header