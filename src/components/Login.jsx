import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {db} from "./firebase"
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function Login({opensingup}) {
  const navigate=useNavigate()
  const handleForgot = () => {
    toast('Password reset link sent to your email', {
      icon: '📧',
      duration: 3000,
    })
  }
  const [loading,setLoading]=useState(false)
  const [inputfield,setinputfield]=useState({
    email:'',
    password:'',
    
  })

  const handleinput=(e,index)=>{
setinputfield({
...inputfield,
[index]:e.target.value
});
  };
const handleloginsubmit = async (e) => {
  e.preventDefault()
  const { email, password } = inputfield
  if (!email?.trim() || !password) {
    toast.error("All fields are required")
    return
  }
  setLoading(true)
  try {
    const userCollection = collection(db, 'user')
    const q = query(
      userCollection,
      where('email', '==', email.trim()),
      where('password', '==', password)  // plain password check (unsafe)
    )
    const querySnap = await getDocs(q)

    if (querySnap.empty) {
      toast.error("Invalid email or password")
    } else {
      toast.success("Login successful")
      navigate('/')  // only navigate if credentials are correct
    }
  } catch (error) {
    console.error('Firebase error:', error)
    toast.error("Something went wrong")
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="p-4 bg ">
      <h2 className="text-xl font-bold mb-4 text-gray-600">Login</h2>
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" value={inputfield.email}  placeholder='Enter your email' className="border block w-full p-2"  onChange={(e)=>handleinput(e,"email")}/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" value={inputfield.password} onChange={(e)=>handleinput(e,'password')} placeholder='Enter the password' className="border block w-full p-2" />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

         
          <p
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={handleForgot}
          >
            Forgot password?
          </p>
        </div>
   
         <button  onClick={handleloginsubmit}
        
        className= {`w-full p-2  px-4 rounded-lg bg-green-500 mt-2 text-white ${
          loading ? "bg-gray-500" : "bg-green-500  hover:bg-green-600"
        }`}
        
        >{loading? 'login...':'login'}</button>
       
      </form>
      <div className='text-center'>
<p className='text-gray-700'>Don't have an account?</p>
<button className='text-red-500 cursor-pointer' onClick={opensingup} >sign up now</button>
      </div>
    </div>
  )
}

export default Login
