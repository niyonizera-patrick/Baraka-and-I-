import React from "react";

import pic from "../photos/site'sphoto/stock2.jpg";
import pic1 from "../photos/site'sphoto/hoes1.jpg";
import pic2 from "../photos//site'sphoto/newwear.jpg";
import pic3 from "../photos/site'sphoto/stock1.jpg";
import pic4 from "../photos//site'sphoto/stock3.jpg";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      image: pic3,
      description: "This is a great product for everyday use.",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$35",
      image: pic2,
      description: "A premium product with amazing features.",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$12",
      image: pic1,
      description: "Affordable and reliable product for everyone.",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$22",
      image: pic4,
      description: "Affordable and reliable product for everyone.",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$25",
      image: pic,
      description: "Affordable and reliable product for everyone.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <p className="text-xl font-bold text-gray-900 mt-4">
                  {product.price}
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
