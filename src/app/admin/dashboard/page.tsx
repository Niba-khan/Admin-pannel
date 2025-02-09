'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaShoppingCart, FaBox, FaUsers } from 'react-icons/fa';
import Sidebar from '@/app/components/sidebar';
import Navbar from '@/app/components/navbar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// 📊 Sales Overview Data
const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [4000, 3000, 5000, 7000, 6000, 8000],
      borderColor: '#40d5e2',
      backgroundColor: 'rgba(64, 213, 226, 0.2)',
      tension: 0.3,
      pointRadius: 4,
      pointBorderColor: '#40d5e2',
      pointBackgroundColor: '#fff',
      borderWidth: 3,
    },
  ],
};

// 🏆 Top Products Data
const topProductsData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
  datasets: [
    {
      label: 'Units Sold',
      data: [150, 120, 300, 220, 180],
      borderColor: '#ff9800',
      backgroundColor: 'rgba(255, 152, 0, 0.2)',
      tension: 0.3,
      pointRadius: 4,
      pointBorderColor: '#ff9800',
      pointBackgroundColor: '#fff',
      borderWidth: 3,
    },
  ],
};

// 📈 Chart Options - Increased Height
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allows custom height
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />

        {/* Content Area */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Total Sales', value: '$5,900', icon: <FaShoppingCart />, bg: 'bg-gray-200' },
              { title: 'New Orders', value: '10', icon: <FaBox />, bg: 'bg-gray-200' },
              { title: 'New Customers', value: '10', icon: <FaUsers />, bg: 'bg-gray-200' },
            ].map((card, index) => (
              <div key={index} className={`p-6 flex items-center gap-4 rounded-xl shadow-md ${card.bg}`}>
                <div className="p-4 bg-gray-300 rounded-full text-gray-700 text-4xl">{card.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-700">{card.title}</h3>
                  <p className="text-3xl font-bold text-gray-800">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 📊 Sales Overview & Top Products Graphs in One Row */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Overview */}
            <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Sales Overview</h3>
              <div className="h-[300px]">
                <Line data={salesData} options={chartOptions} />
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Top Products</h3>
              <div className="h-[300px]">
                <Line data={topProductsData} options={chartOptions} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
