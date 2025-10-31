import React from 'react'

function Modal({isModalOpen,setIsModalOpen,children}) {
    if(!isModalOpen)  return null
    
  return (
 <div className="fixed inset-0 bg-gray-800 bg-opacity-85 flex items-center justify-center z-50">
  <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
    <button
      className="absolute top-4 right-4 text-gray-400 text-3xl"
      onClick={() => setIsModalOpen(false)}
    >
      &times;
    </button>
    <div>{children}</div>
  </div>
</div>
  )
}

export default Modal
