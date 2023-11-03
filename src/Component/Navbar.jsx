import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'
function Navbar() {
  return (
    <>
    <div className='bg'></div>
    <div className='font'>
      
    <span className='col-yellow'>Browse</span>
    <span>Buy</span>
    
  </div>
      <header>
        
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
          </Link>
          <ul class="dropdown-menu" style={{'background':'black','color':'white','fontSize':'10px'}}>
            <li><Link class="dropdown-item" to="/cloth" style={{'fontSize':'20px'}}>Cloth</Link></li>
            <li><Link class="dropdown-item" to="/electronic" style={{'fontSize':'20px'}}>Electronic</Link></li>
            <li><Link class="dropdown-item" to="/jewelery" style={{'fontSize':'20px'}}>Jewelery</Link></li>
          </ul>
        </li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </header>
    </>
  )
}

export default Navbar

