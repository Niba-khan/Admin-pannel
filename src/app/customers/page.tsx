'use client';
import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";


const customers = [
  { id: 1, name: "Kinza khan", email: "uzma@example.com", phone: "123-456-7890", address: "Lahore, Pakistan", lastPurchase: '2025-02-08', totalSpent: "$500", paymentMethod: "Credit Card", lastOrder: "Bright Space" },
  { id: 2, name: "Daniyal Shah", email: "yusra@example.com", phone: "987-654-3210", address: "Karachi, Pakistan", lastPurchase: '2025-02-07', totalSpent: "$750", paymentMethod: "PayPal", lastOrder: "Rustic Vase Set" },
  { id: 3, name: "Uzma Imran", email: "vini@example.com", phone: "555-666-7777", address: "Islamabad, Pakistan", lastPurchase: '2025-02-06', totalSpent: "$300", paymentMethod: "Cash", lastOrder: "Timber Craft" },
  { id: 4, name: "Yusra khan", email: "asma@example.com", phone: "444-333-2222", address: "Peshawar, Pakistan", lastPurchase: "2025-02-05", totalSpent: "$600", paymentMethod: "Credit Card", lastOrder: "Bold Nest" },
  { id: 5, name: "Maha khan", email: "haram@example.com", phone: "111-222-3333", address: "Multan, Pakistan", lastPurchase: "2025-02-04", totalSpent: "$450", paymentMethod: "PayPal", lastOrder: "Syltherine" },
  { id: 6, name: "Haider Ali Shah", email: "sania@example.com", phone: "666-777-8888", address: "Quetta, Pakistan", lastPurchase: "2025-02-03", totalSpent: "$900", paymentMethod: "Cash", lastOrder: "Marble Ease" },
];

export default function CustomerDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Customer Table */}
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
          <h1 className="text-2xl font-bold mb-4">Customers</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Address</th>
                  <th className="border p-2">Last Purchase</th>
                  <th className="border p-2">Total Spent</th>
                  <th className="border p-2">Payment Method</th>
                  <th className="border p-2">Last Order</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="text-center hover:bg-gray-100">
                    <td className="border p-2">{customer.id}</td>
                    <td className="border p-2">{customer.name}</td>
                    <td className="border p-2">{customer.email}</td>
                    <td className="border p-2">{customer.phone}</td>
                    <td className="border p-2">{customer.address}</td>
                    <td className="border p-2">{customer.lastPurchase}</td>
                    <td className="border p-2">{customer.totalSpent}</td>
                    <td className="border p-2">{customer.paymentMethod}</td>
                    <td className="border p-2">{customer.lastOrder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
