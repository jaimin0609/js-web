import React, { useState } from 'react';
import Sidebar from './Sidebar';

export function Header2() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-white text-black py-2 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* All Icon */}
        <div className="flex items-center" onClick={toggleSidebar}>
          <div className="bg-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-card-list"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>
          </div>
          <span className="ml-2 font-medium">All</span>
        </div>

        {/* Categories */}
        <ul className="flex items-center space-x-4">
          <li className="relative group">
            <span className="font-medium">Electronics</span>
            <div className="absolute left-0 mt-2 py-2 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
              <ul className="space-y-2 px-4">
                {/* Electronics sub-categories */}
                <li className="text-sm">Mobile Phones</li>
                <li className="text-sm">Laptops</li>
                <li className="text-sm">Televisions</li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <span className="font-medium">Fashion</span>
            <div className="absolute left-0 mt-2 py-2 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
              <ul className="space-y-2 px-4">
                {/* Fashion sub-categories */}
                <li className="text-sm">Clothing</li>
                <li className="text-sm">Shoes</li>
                <li className="text-sm">Accessories</li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <span className="font-medium">Home Improvement</span>
            <div className="absolute left-0 mt-2 py-2 bg-white text-black rounded-lg shadow-lg hover:underline hidden group-hover:block">
              <ul className="space-y-2 px-4">
                {/* sub-categories */}
                <li className="text-sm">Smart Home</li>
                <li className="text-sm">Kitchen</li>
                <li className="text-sm">Garden</li>
                <li className="text-sm">Bedroom</li>
                <li className="text-sm">Bathroom</li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <span className="font-medium">Toys &amp; Hobbies</span>
            <div className="absolute left-0 mt-2 py-2 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
              <ul className="space-y-2 px-4">
                {/* sub-categories */}
                <li className="text-sm">Smart Toys</li>
                <li className="text-sm">Soft Toys &amp; Dolls</li>
                <li className="text-sm">Puzzles</li>
                <li className="text-sm">Board &amp; Card Games</li>
                <li className="text-sm">Play Station Games</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Sidebar */}
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
}

export default Header2;
