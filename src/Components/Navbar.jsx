import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black h-[100px]">
      <div className="flex justify-end items-center h-full">
        <div className="text-white">
          <Link to="/" className="text-gray-300 text-2xl hover:text-white">Home</Link>
          <Link to="/login" className="text-gray-300 text-2xl ml-10 mr-9 hover:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
