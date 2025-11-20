import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Register({ openlogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleregister = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      toast.error('abe chutiye pahle pura form bhar ')
      return
    }
    if (!email.trim()) {
      toast.error('Please enter your email')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    if (!password) {
      toast.error('Please enter a password')
      return
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    // Registration success (client-side). Replace with API call as needed.
    const user = { id: Date.now(), name: name.trim(), email: email.trim() }
    localStorage.setItem('user', JSON.stringify(user))
    toast.success('Registered successfully')
    // Optionally open login modal or call provided callback
    if (typeof openlogin === 'function') openlogin()
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleregister}>
        <div className="mb-3">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border block w-full p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border block w-full p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter the password"
            className="border block w-full p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 px-4 rounded-lg bg-green-500 mt-2 text-white"
        >
          Register
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-700">Already have an account?</p>
        <button className="text-red-500" onClick={openlogin}>
          Login now
        </button>
      </div>
    </div>
  )
}

export default Register