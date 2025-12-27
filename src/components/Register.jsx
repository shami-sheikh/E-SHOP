import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { auth, db } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Register() {
const navigate=useNavigate()
const [loading,setLoading]=useState(false)
const [inputfield,setinputfield]=useState({
  name:"",
  email:"",
  password:""
})
const handleinput=(e,key)=>{
  setinputfield({
    ...inputfield,[key]:e.target.value
  })
}
const handleregister=async(e)=>{
  e.preventDefault()
  const {email,name,password}=inputfield;
  if(!email||!name||!password){
    toast.error("All fields required!")
    return;
  }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    if(password.length<6){
      toast.error("password must be atleast 6 charectors")
      return
    }
    setLoading(true)
    try {
    const userRegister=await createUserWithEmailAndPassword(auth ,email,password)
    const user=userRegister.user
    console.log("user Registered",user.uid);
    await setDoc(doc(db,"user",user.uid),{
      createdAt:new Date().toLocaleString("en-IN",{
        year:'numeric',
        month:"short",
        day:"2-digit",
        hour:"2-digit",
        minute:"2-digit"
      }),
      name:inputfield.name,
      email:inputfield.email
    })
    setinputfield({
      name:"",
      password:"",
      email:""
    })
    navigate("/login")
    toast.success(` Register succefully`)
    } catch (error) {
      console.log(error);
      
        toast.error('Failed to create profile document (Firestore)')
    }finally{
      setLoading(false)
    }
}
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form >
        <div className="mb-3">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border block w-full p-2"
            value={inputfield.name}
            autoComplete='off'
            onChange={(e)=>handleinput(e,"name")}
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border block w-full p-2"
            value={inputfield.email}
            autoComplete='off'
            onChange={(e)=>handleinput(e,"email")}

          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            autoComplete='new-password'
            placeholder="Enter the password"
            className="border block w-full p-2"
            value={inputfield.password}
            onChange={(e)=>handleinput(e,"password")}
            
          />
        </div>
        <button
          type="submit"
          onClick={handleregister}
          className={`${loading ? "bg-gray-600 text-white":"bg-green-500 hover:bg-green-600 text-black"} w-full p-2 px-4 rounded-lg`}
        >
        {loading ? "  Registering...":"  Register"}
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-700">Already have an account?</p>
        <button className="text-red-500" >
          Login now
        </button>
      </div>
    </div>
  )
}

export default Register