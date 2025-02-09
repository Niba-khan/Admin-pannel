'use client';
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-[#a8e6a3] shadow-md px-6 py-4 flex justify-between items-center rounded-b-lg">
      <h1 className="text-xl font-bold text-gray-900">Welcome Back!</h1>
      <button className="bg-[#4caf50] text-white px-4 py-2 rounded-lg transition hover:bg-[#388e3c] flex items-center gap-2">
        <FaSignOutAlt /> Logout
      </button>
    </header>
  );
};

export default Navbar;
