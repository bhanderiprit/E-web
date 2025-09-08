import React from 'react';

function Card({ img, author, id }) {
  return (
    <div
      key={id}
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
    >
      <img
        src={img}
        alt={author}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{author}</h2>
        <p className="text-yellow-400 font-bold mt-2">ID: {id}</p>
      </div>
    </div>
  );
}

export default Card;
