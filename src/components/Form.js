import React, { useRef, useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import {useForm} from 'react-hook-form'
function Form({setVisible}) {
   
   const {register,handleSubmit,formState}=useForm()
  const [spin,setSpin] = useState(false)
   const {isSubmitted}=formState
    function submitForm(data){
      setSpin(true)
      setTimeout(()=>{console.log(data);},30000)
      setTimeout(()=>{setSpin(false)},30000)
      
    }
  return (
    <>
    <form className='formContainer' onSubmit={handleSubmit(submitForm)}>
    <div className="mb-3">
      <label className="form-label">Full Name</label>
      <input type="text" className="form-control"  placeholder='Enter your name here' name="Name" {...register("Name")}/>
     
    </div>
    <div className="mb-3">
      <label className="form-label">Date Of Birth</label>
      <input type="Date" className="form-control" placeholder='Enter your name here' name="Dob" {...register("Dob")}/>
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" aria-describedby="emailHelp" name="email" {...register("email")}/>
    </div>
    <div className="mb-3">
      <label   className="form-label">Address</label>
      <input type="text" className="form-control" name="address" {...register("address")}/>
    </div>
    
    <div className="mb-3">
    <label className="form-label">Contact No.</label>
    <input type="Number" className="form-control" name="contact" {...register("contact")}/>
  </div>
    <button type="submit"   className="btn btn-primary btnn">{spin && <span className='spinner-grow spinner-grow-sm'></span>}Submit</button>  
    
    <button onClick={()=>setVisible(false)} className="btn btn-danger btnn"><Link to="/" className='close'>Close</Link></button>
    
  </form>
   </>
  )
}

export default Form
// disabled={isSubmitted}
// 