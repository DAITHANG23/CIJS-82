import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import './Header.css'
const Header = (props) => {
  const {cart} = props;
const navigate = useNavigate();

const onNavigateToCartPage = () =>{
  navigate('/cart');
}

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{display:"flex", justifyContent: 'space-between'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src='./images/Logo-Thegioididong.jpg'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" to="/Admin">Admin</Link>
            </li>
          </ul>
          
        </div>
      </div>

      <div className='cart-container' onClick={onNavigateToCartPage}>
        <div className='icon-cart'>
        <FaShoppingCart />
        </div>
        
        <span className='number-cart'>{cart}</span>
      </div>
    </nav>
  )
}

export default Header