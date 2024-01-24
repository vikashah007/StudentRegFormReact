import React from 'react'
import { useState,useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Home from './Home';
const Spinner = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{setLoading(false)},3000)
    },[])
  return (
   <>
      {loading && <ClipLoader
        color={'#5793f2'}
        loading={loading}
        cssOverride={{zIndex:9999}}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      </>
  )
}

export default Spinner
