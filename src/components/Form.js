import React, { useRef } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
function Form() {
    const fullname=useRef()
    const email=useRef()
    const address=useRef()
    const date=useRef()
    const contact=useRef()
    let onSubmitting=(event)=>{
    const fullName=fullname.current.value
    const Email= email.current.value
    const Address=address.current.value
    const Date=date.current.value
    const Contact=contact.current.value
        event.preventDefault();
       setTimeout(()=>{console.log("Name : " + fullName + " Email : " + Email + " Address : "  + Address + " Date : " + Date + " Contact : " + Contact)},3000)
    // alert(fullname.current.value + email.current.value + address.current.value + contact.current.value)
    fullname.current.value=""
    date.current.value=""
        email.current.value=""
        address.current.value=""
        contact.current.value=""
    }
    
  return (
    <>
    <form className='formContainer'>
    <div className="mb-3">
      <label className="form-label">Full Name</label>
      <input type="text" className="form-control" ref={fullname} placeholder='Enter your name here'/>
     
    </div>
    <div className="mb-3">
      <label className="form-label">Date Of Birth</label>
      <input type="Date" ref={date} className="form-control" placeholder='Enter your name here'/>
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" ref={email} className="form-control" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label   className="form-label">Address</label>
      <input type="text" ref={address} className="form-control"/>
    </div>
    
    <div className="mb-3">
    <label className="form-label">Contact No.</label>
    <input type="Number" ref={contact}  className="form-control" />
  </div>
    <button type="submit btnn" onClick={onSubmitting} className="btn btn-primary">Submit</button>
    <button  className="btn btn-danger btnn"><Link to="/" className='close'>Close</Link></button>
    
  </form>
   </>
  )
}

export default Form
