import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between ">
      <Link to="/" className="flex items-center space-x-1">
        {/* <img className="w-[max(10%,80px)]" src={assets.logo} alt="" /> */}
        <img src={assets.logo} width={50} height={50} alt="" />
        <span className="font-bold text-xl text-black">Eshop</span>
        <div className="text-pink-600">ADMIN PANEL</div>
      </Link>
      <button
        onClick={() => setToken("")}
        className="bg-red-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
