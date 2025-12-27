import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { auth } from "./firebase"

import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Login({opensingup}) {
  const navigate=useNavigate()
  const handleForgot = async () => {
      const email = inputfield.email
      if (!email) { toast.error('Enter your email first'); return }
      try {
        await sendPasswordResetEmail(auth, email)
        toast('Password reset link sent to your email', { icon: '📧', duration: 3000 })
      } catch (err) {
        console.error(err)
        // Fallback: if Firebase email reset not available, check local users
        const localUsers = JSON.parse(localStorage.getItem('localUsers') || '[]')
        const found = localUsers.find((u) => u.email === email)
        if (found) {
          toast('Local account found. Password reset via email is not available in fallback.', { icon: 'ℹ️' })
        } else {
          toast.error('Failed to send reset email')
        }
      }
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
      toast.error('All fields are required')
      return
    }
    setLoading(true)
    try {
      const userCred = await signInWithEmailAndPassword(auth, email.trim(), password)
      toast.success('Login successful')
      // Optionally navigate or load profile
      navigate('/')
    } catch (err) {
      console.error('Auth error', err)
      const code = err?.code || 'auth/error'
      const msg = err?.message || 'Invalid email or password'
      // Try localStorage fallback when auth is not configured or network failed
      if (code === 'auth/configuration-not-found' || code === 'auth/network-request-failed') {
        const localUsers = JSON.parse(localStorage.getItem('localUsers') || '[]')
        const found = localUsers.find((u) => u.email === email.trim() && u.password === password)
        if (found) {
          toast.success('Login successful (local)')
          navigate('/')
        } else {
          toast.error('Local auth failed: check email/password or register')
        }
      } else {
        toast.error(`${code}: ${msg}`)
      }
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
        
        className= {`w-full p-2  px-4 rounded-lg  mt-2 text-white ${
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
