import React from 'react'

function Register({openlogin}) {
  return (
   <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="email" placeholder='Enter your name' className="border block w-full p-2" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" placeholder='Enter your email' className="border block w-full p-2" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" placeholder='Enter the password' className="border block w-full p-2" />
        </div>

        
      </form>
      <div className='text-center'>
<p className='text-gray-700'>Allready have an account?</p>
<button className='text-red-500' onClick={openlogin}>Login now</button>
      </div>
    </div>
  )
}

export default Register