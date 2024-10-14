import React, { useState } from "react";
import { FaServicestack } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center z-50  p-4 bg-white w-full fixed top-0 text-xl font-serif  cursor-pointer">
      <div className="flex gap-3">
        <h1 className="pr-96 text-xl">
          <FaServicestack />
          SwiftServe{" "}
        </h1>
      </div>

      <div className="flex">
        <ul className="flex justify-between gap-20">
          <li className="hover:text-blue-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/signup">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
