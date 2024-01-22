import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="container">
    <header class="d-flex flex align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      
      <ul class="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 link-danger ">Home</Link></li>
      </ul>

      <div class="col-md-3 text-end  col-md-auto">
      <Link to="/Form" class="nav-link"><button type="button" class="btn btn-primary">Register Here</button></Link>
      </div>
    </header>
  </div>
  )
}

export default Header

