import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, url }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gray-50">
      <img
        className="w-[250px] mb-8 rounded"
        src={url}
        alt="No Content"
      />
      <p className="text-3xl font-semibold text-gray-800">{title}</p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 w-[180px] py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Empty;
