'use client'
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";


type Setting = {
  category: string;
  value: string | number | boolean;
};

const columns = [
  { Header: "Category", accessor: "category" },
  { Header: "Value", accessor: "value" }
];

const data: Setting[] = [
  { category: "Account", value: true },
  { category: "Notifications", value: false },
  { category: "Language", value: "English" },
  { category: "Theme", value: "Dark" },
  { category: "Privacy", value: "Public" },
  { category: "Security", value: "High" },
  { category: "Location", value: "USA" },
  { category: "Backup", value: "Enabled" }
];

const SettingsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;

  const currentData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / pageSize) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Settings</h1>

            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  {columns.map((column, idx) => (
                    <th key={idx} className="border-b px-4 py-2 text-left font-medium text-gray-700">
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, idx) => (
                  <tr key={idx} className="even:bg-gray-100">
                    <td className="border-b px-4 py-2 text-gray-600">{row.category}</td>
                    <td className="border-b px-4 py-2 text-gray-600">{row.value.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
                className="p-2 bg-gray-300 text-gray-700 rounded-full disabled:opacity-50"
              >
                <FaChevronLeft />
              </button>

              <span className="mx-4 text-gray-700">
                Page {currentPage + 1} of {Math.ceil(data.length / pageSize)}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(data.length / pageSize) - 1}
                className="p-2 bg-gray-300 text-gray-700 rounded-full disabled:opacity-50"
              >
                <FaChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
