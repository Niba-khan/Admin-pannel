'use client';
import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaBox, FaUsers, FaCog } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col bg-gradient-to-r from-[#a8e6a3] to-[#77d977] text-white w-64 p-6 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl font-bold">Brand Name</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        {[
          { name: 'Overview', path: '/', icon: <MdDashboard /> },
          { name: 'Orders', path: '/cart', icon: <FaShoppingCart /> },
          { name: 'Products', path: '/product', icon: <FaBox /> },
          { name: 'Customers', path: '/customers', icon: <FaUsers /> },
          { name: 'Settings', path: '/setting', icon: <FaCog /> },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex items-center gap-3 text-lg hover:bg-[#1e4023] px-4 py-3 rounded-lg transition duration-200 ease-in-out"
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
