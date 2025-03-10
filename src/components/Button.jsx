import React from 'react'

function Button({ children }) {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded block mx-auto">
        {children}
      </button>
    );
  }
  

export default Button