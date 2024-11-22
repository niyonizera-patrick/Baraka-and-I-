import React, { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiBox,
  FiLogOut,
  FiArrowDownCircle,
  FiArrowUpCircle,
} from "react-icons/fi";

export default function AdminPanel() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-blue-600 text-white duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <h1
            className={`text-xl font-bold duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-grow">
          <ul className="space-y-6 mt-4">
            <li className="flex items-center gap-4 px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <FiHome size={24} />
              {isSidebarOpen && <span>Dashboard</span>}
            </li>
            <li className="flex items-center gap-4 px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <FiBox size={24} />
              {isSidebarOpen && <span>Stock</span>}
            </li>
            <li className="flex items-center gap-4 px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <FiArrowDownCircle size={24} />
              {isSidebarOpen && <span>Product In</span>}
            </li>
            <li className="flex items-center gap-4 px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <FiArrowUpCircle size={24} />
              {isSidebarOpen && <span>Product Out</span>}
            </li>
            <li className="flex items-center gap-4 px-4 py-2 hover:bg-red-600 cursor-pointer">
              <FiLogOut size={24} />
              {isSidebarOpen && <span>Log Out</span>}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to the Admin Panel</h1>
        <p className="mt-2 text-gray-600">
          Select an option from the sidebar to get started.
        </p>
      </div>
    </div>
  );
}
