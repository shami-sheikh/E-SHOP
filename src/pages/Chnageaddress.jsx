import React, { useState } from "react";

function Chnageaddress({ setAddress, setIsModalOpen }) {
  const [newaddress, setnewaddress] = useState("");

  const onSave = () => {
    if (newaddress.trim()) setAddress(newaddress);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg text-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Change Address</h2>

      <input
        type="text"
        placeholder="Enter new address"
        value={newaddress}
        onChange={(e) => setnewaddress(e.target.value)}
        className="border border-gray-300 w-full mb-5 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="flex justify-end space-x-3">
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
          onClick={onSave}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

export default Chnageaddress;
