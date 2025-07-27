import React from 'react'

function Card({username = "Ameen"}) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
    <img className="w-full" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sample" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a short description inside the card. It looks neat!
      </p>
      <p className="text-gray-600 mb-4">{username}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default Card;
