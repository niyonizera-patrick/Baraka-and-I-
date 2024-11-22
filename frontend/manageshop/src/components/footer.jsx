import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> 123STkk Main Street, City, Country
            </li>
            <li className="flex items-center mb-2">
              <FaPhone className="mr-2" /> 0798618528
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> contact@mywebsite.com
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:underline">Services</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Additional Info */}
      <div className="text-center mt-8 border-t border-gray-700 pt-6">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Built with ❤️ by <a href="https://github.com/yourprofile" className="hover:underline">Your Name</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
