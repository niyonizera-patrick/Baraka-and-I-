import React, { useState } from "react";
import loggo from "../photos/logo.jpeg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaHome, FaProductHunt, FaServicestack, FaInfoCircle, FaSearch, FaUserShield } from "react-icons/fa";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md fixed w-full left-0 top-0 z-50">
        <nav className="flex items-center justify-between h-[3cm] px-6 md:px-8 py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img
              src={loggo}
              alt="Brand Logo"
              className="w-12 h-12 rounded-full object-cover shadow-lg"
            />
            <h1 className="text-lg font-bold">Xy_shop</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <FaHome />
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <FaProductHunt />
              <Link to="/product">Product</Link>
            </li>
            <li className="hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <FaServicestack />
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-gray-900 cursor-pointer flex items-center space-x-2">
              <FaInfoCircle />
              <Link to="/about">About</Link>
            </li>
          </ul>

          {/* Search Bar & Admin Panel */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <FaSearch className="absolute top-2.5 left-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <Link to="/register">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center space-x-2">
                <FaUserShield />
                <span>Admin Panel</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-100 shadow-md">
            <ul className="space-y-4 py-4 text-center text-gray-700 font-medium">
              <li className="hover:text-gray-900 cursor-pointer flex items-center justify-center space-x-2">
                <FaHome />
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-gray-900 cursor-pointer flex items-center justify-center space-x-2">
                <FaProductHunt />
                <Link to="/product" onClick={() => setMobileMenuOpen(false)}>
                  Product
                </Link>
              </li>
              <li className="hover:text-gray-900 cursor-pointer flex items-center justify-center space-x-2">
                <FaServicestack />
                <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="hover:text-gray-900 cursor-pointer flex items-center justify-center space-x-2">
                <FaInfoCircle />
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className="pt-4">
                <div className="relative">
                  <FaSearch className="absolute top-2.5 left-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-4 py-2 w-3/4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </li>
              <li>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center space-x-2">
                    <FaUserShield />
                    <span>Admin Panel</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
