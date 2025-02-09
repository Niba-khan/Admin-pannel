"use client";
import React from "react";
import Image from "next/image";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";


const orders = [
  { id: "ORD01245", name: "Kinza Khan", date: "2025-02-08", status: "Pending", total: "$500", image: "/images/cart1.webp" },
  { id: "ORD01246", name: "Daniyal Shah", date: "2025-02-07", status: "Processing", total: "$750", image: "/images/cart2.webp" },
  { id: "ORD01247", name: "Uzma Imran", date: "2025-02-06", status: "Completed", total: "$300", image: "/images/cart3.webp" },
  { id: "ORD01248", name: "Yusra Khan", date: "2025-02-05", status: "Pending", total: "$600", image: "/images/cart4.webp" },
  { id: "ORD01249", name: "Maha Khan", date: "2025-02-04", status: "Processing", total: "$450", image: "/images/cart5.webp" },
  { id: "ORD01250", name: "Haider Ali Shah", date: "2025-02-03", status: "Completed", total: "$900", image: "/images/cart6.webp" },
];

export default function OrderTable() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Order List</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Order ID</th>
                  <th className="border border-gray-300 p-2">Order (Item)</th>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Order Date</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">#{order.id}</td>
                    <td className="border border-gray-300 p-2">
                      <Image src={order.image} alt={order.name} width={50} height={50} className="rounded" />
                    </td>
                    <td className="border border-gray-300 p-2">{order.name}</td>
                    <td className="border border-gray-300 p-2">{order.date}</td>
                    <td
                      className={`border border-gray-300 p-2 font-semibold ${
                        order.status === "Pending"
                          ? "text-yellow-500"
                          : order.status === "Processing"
                          ? "text-blue-500"
                          : "text-green-500"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td className="border border-gray-300 p-2 font-bold">
                      ${parseFloat(order.total.replace("$", "")).toFixed(2)}
                    </td>
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
