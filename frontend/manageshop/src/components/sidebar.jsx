import React from "react";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const alllinks = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Stock", link: "/#" },
    { name: "ProductIn", link: "/#" },
    { name: "ProductOut", link: "/dashboard" },
  ];
  return (
    <div className="left-0 bg-slate-950 h-[20cm] mt-28 p-6 max-w-44">
      <div className="">
        {/* Sidebar Items */}
        <ul className="hidden md:flex flex-col space-y-8  text-white ">
          {alllinks.map((tems, index) => (
            <li key={index}>
              <a href={tems.link} className="hover:text-blue-600">
                {tems.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (Hamburger Sidebar) */}
        <div className="flex-grow pt-56">
          <a
            href=""
            className="flex items-center space-x-2 text-white hover:text-red-500"
          >
            <FiLogOut />
            <span>LogOut</span>
          </a>
        </div>
      </div>
    </div>
  );
}
