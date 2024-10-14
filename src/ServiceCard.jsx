import React from "react";

const ServiceCard = ({ icon, heading, description }) => {
  return (
    <div className="bg-white relative hover:scale-105 transition duration-700 hover:bg-amber-500 rounded-lg shadow-lg p-6 mb-10 flex flex-col items-center justify-center max-w-xs text-center">
      <div className="bg-black absolute -top-8 text-white p-4 rounded-lg mb-10">
        {icon}
      </div>
      <h3 className="text-lg  hover:text-white text-black font-semibold mt-5 mb-2">
        {heading}
      </h3>
      <p className="text-gray-600  hover:text-white  mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:text-white font-semibold">
        More
      </a>
    </div>
  );
};

export default ServiceCard;
