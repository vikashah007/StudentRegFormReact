import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Modal} from 'reactstrap'
import Form from './Form'

const Header = () => {
  const [visible,setVisible]=useState(false)
  return (
    <div class="container">
    <header class="d-flex flex align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      
      <ul class="nav col-6 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 link-danger ">Home</Link></li>
      </ul>

      <div class="col-md-3 text-end  col-md-auto">
      <button type="button" onClick={()=>setVisible(true)} class="btn btn-primary">Register Here</button>
      <Modal isOpen={visible}>
      <Form setVisible={setVisible}/>
      </Modal>
      </div>
    </header>
  </div>
  )
}

export default Header

