import { useState } from "react";

const ProductForm = ({
  onAddProduct,
  onClose,
}: {
  onAddProduct: (product: { title: string; price: string; image: string }) => void;
  onClose: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !price.trim() || !image.trim()) {
      alert("Please fill all fields");
      return;
    }

    // Ensure correct image format
    const formattedImage = image.startsWith("http") ? image : `/images/${image}`;

    const newProduct = { title, price, image: formattedImage };
    onAddProduct(newProduct);

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-xl">
          &times;
        </button>

        <h3 className="text-lg font-bold mb-4 text-center">Add New Product</h3>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />

        <input
          type="text"
          placeholder="Image URL or filename"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />

        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600">
          Save Product
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
