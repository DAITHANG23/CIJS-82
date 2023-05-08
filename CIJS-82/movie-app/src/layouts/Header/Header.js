import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav style={{
        padding:"20px"
      }}>
        <ul style={{
          display:"flex",
          gap:" 20px"
        }}>
          <li>
          <Link to={'/'}>Home</Link>
          </li>

          <li>
          <Link to={'/about-us'}>About Us</Link>
          </li>

          <li>
          <Link to={'/search'}>Search Movies</Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header