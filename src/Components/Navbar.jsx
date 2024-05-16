import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-customBlue h-[75px]">
      <div className="flex justify-end items-center h-full">
        <div className="text-white">
          <Link to="/" className="text-white text-2xl hover:text-blue-500">Home</Link>
          <Link to="/login" className="text-white text-2xl ml-10 mr-9 hover:text-blue-500">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
