import React from 'react'
import toast from 'react-hot-toast'

function Login({opensingup}) {
  const handleForgot = () => {
    toast('Password reset link sent to your email', {
      icon: '📧',
      duration: 3000,
    })
  }
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" placeholder='Enter your email' className="border block w-full p-2" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" placeholder='Enter the password' className="border block w-full p-2" />
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
        <button className='w-full p-2  px-4 rounded-lg bg-red-500 mt-2 '>Login</button>
      </form>
      <div className='text-center'>
<p className='text-gray-700'>Don't have an account?</p>
<button className='text-red-500 cursor-pointer' onClick={opensingup} >sign up now</button>
      </div>
    </div>
  )
}

export default Login
