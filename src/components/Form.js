import React, { useRef } from 'react'

function Form() {
    const fullname=useRef()
    const email=useRef()
    const address=useRef()
    const date=useRef()
    const contact=useRef()
    let onSubmitting=(event)=>{
        event.preventDefault();
       console.log(fullname.current.value)
       console.log(email.current.value)
       console.log(date.current.value)
       console.log(address.current.value)
       console.log(contact.current.value)
    // alert(fullname.current.value + email.current.value + address.current.value + contact.current.value)
    fullname.current.value=""
    email.current.value=""
    address.current.value=""
    contact.current.value=""
    }
  return (
    
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
    <button type="submit" onClick={onSubmitting} className="btn btn-primary">Submit</button>
  </form>
   
  )
}

export default Form
