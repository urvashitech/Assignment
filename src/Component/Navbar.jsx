import React from 'react'
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
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
          </a>
          <ul class="dropdown-menu" style={{'background':'black','color':'white','fontSize':'10px'}}>
            <li><a class="dropdown-item" href="/" style={{'fontSize':'20px'}}>Cloth</a></li>
            <li><a class="dropdown-item" href="/" style={{'fontSize':'20px'}}>Electronic</a></li>
            <li><a class="dropdown-item" href="/" style={{'fontSize':'20px'}}>Jewelery</a></li>
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

