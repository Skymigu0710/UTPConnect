import React from "react";

const ListItem = ({ title, lastVisit, image }) => {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md my-2">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      {/* Información */}
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-600">Última visita: {lastVisit}</p>
      </div>
      {/* Botón */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Ver grupo
      </button>
    </div>
  );
};

export default ListItem;

