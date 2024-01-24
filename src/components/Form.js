import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
// import Home from './Home'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'
// import { PostList } from '../Post/PostLists'
function Form({setVisible}) {
  // const {addPost,addInitialPosts,postList}= useContext(PostList)
   const {register,handleSubmit,formState}=useForm()
  const [spin,setSpin] = useState(false)
 let [input,setInput]=useState([])
 let [store,setStore]=useState(input)
   const {isSubmitted}=formState
   let [active,setActive]=useState(false)
    function submitForm(data){
      setActive(true)
      setSpin(true)
      setStore({data,...input})
    setTimeout(()=>{ setActive(false)},3000)
     
      setTimeout(()=>{setSpin(false)},3000)
      setTimeout(()=>{console.log(data)},5000)
      setTimeout(()=>{alert("submitted successfully")},5000)

      
    }
 function add(){

 }
 useEffect(()=>{
  axios.get('https://dummyjson.com/users')
  .then((res)=>{setInput(res.data.users)})
  
 },[])
   
  return (
    <>
    { isSubmitted && input.map((post)=>{
      const {firstName,birthDate,email,address,phone}=post;
      return <>{console.log({firstName,birthDate,email,address,phone} )}</>
    }) }
    <form className='formContainer' onSubmit={handleSubmit(submitForm)}>
    <div className="mb-3">
      <label className="form-label">Full Name</label>
      <input type="text" className="form-control"  placeholder='Enter your name here' name="firstName" {...register("firstName")}/>
     
    </div>
    <div className="mb-3">
      <label className="form-label">Date Of Birth</label>
      <input type="Date" className="form-control" placeholder='Enter your name here' name="birthDate" {...register("birthDate")}/>
     
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
    <input type="Number" className="form-control" name="phone" {...register("phone")}/>
  </div>
  <div className='bothbtn'> 
    <button type="submit" disabled={active}  className="btn btn-primary btnn">{spin && <span className='spinner-grow spinner-grow-sm'></span>}Submit</button>  
    
    <button disabled={active} onClick={()=>setVisible(false)} className="btn btn-danger btnn"><Link to="/" className='close'>Close</Link></button>
    </div>
  </form>
   </>
  )
}

export default Form
// disabled={isSubmitted}
// 