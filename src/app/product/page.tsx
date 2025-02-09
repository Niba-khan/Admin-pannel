"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import ProductForm from "../components/productform";
import ProductCard from "../components/productcard";

const ProductPage = () => {
  const initialProducts = [
    { id: 1, title: "Bright Space", price: "$500", image: "/images/cart1.webp" },
    { id: 2, title: "Rustic Vase Set", price: "$750", image: "/images/cart2.webp" },
    { id: 3, title: "Timber Craft", price: "$300", image: "/images/cart3.webp" },
    { id: 4, title: "Bold Nest", price: "$600", image: "/images/cart4.webp" },
    { id: 5, title: "Syltherine", price: "$450", image: "/images/cart5.webp" },
    { id: 6, title: "Marble Ease", price: "$900", image: "/images/cart6.webp" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);

  const addProduct = (newProduct: { title: string; price: string; image: string }) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setShowForm(false);
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
          <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            {/* Heading and Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Product List Item</h2>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Create New Product
              </button>
            </div>

            {showForm && <ProductForm onAddProduct={addProduct} onClose={() => setShowForm(false)} />}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
